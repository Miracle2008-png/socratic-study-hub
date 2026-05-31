import React, { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { useAuth } from './AuthContext';
import { supabase } from '../utils/supabase';

interface GamificationState {
  xp: number;
  level: number;
  streak: number;
  lastActiveDate: string | null;
  dailyGoalProgress: number;
  dailyGoalTarget: number;
}

interface GamificationContextType extends GamificationState {
  addXP: (amount: number, reason: string) => void;
  resetDailyGoal: () => void;
  checkStreak: () => void;
}

const defaultState: GamificationState = {
  xp: 0,
  level: 1,
  streak: 0,
  lastActiveDate: new Date().toISOString().split('T')[0],
  dailyGoalProgress: 0,
  dailyGoalTarget: 100,
};

const GamificationContext = createContext<GamificationContextType | undefined>(undefined);

export const GamificationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { currentUser } = useAuth();
  const [state, setState] = useState<GamificationState>(defaultState);
  const [loaded, setLoaded] = useState(false);

  // Fetch from Supabase DB
  useEffect(() => {
    const fetchProgress = async () => {
      if (!currentUser) {
        setState(defaultState);
        setLoaded(true);
        return;
      }

      try {
        const { data, error } = await supabase
          .from('gamification_stats')
          .select('*')
          .eq('user_id', currentUser.id)
          .single();

        if (error && error.code !== 'PGRST116') {
          console.error("Failed to load gamification stats from DB", error);
          setState(defaultState);
        } else if (data) {
          setState({
            xp: data.xp || 0,
            level: data.level || 1,
            streak: data.current_streak || 0,
            lastActiveDate: data.last_active_date || new Date().toISOString().split('T')[0],
            dailyGoalProgress: 0, // Reset daily goal progress on new session
            dailyGoalTarget: 100,
          });
        } else {
          // If no row exists (PGRST116), insert default state
          await supabase.from('gamification_stats').insert({
            user_id: currentUser.id,
            xp: 0,
            level: 1,
            current_streak: 0,
            last_active_date: new Date().toISOString().split('T')[0]
          });
          setState(defaultState);
        }
      } catch (err) {
        console.error("Failed to load gamification stats", err);
      } finally {
        setLoaded(true);
      }
    };
    fetchProgress();
  }, [currentUser]);

  // Save to Supabase DB
  useEffect(() => {
    if (loaded && currentUser) {
      const saveToDb = async () => {
        try {
          const { error } = await supabase.from('gamification_stats').upsert({
            user_id: currentUser.id,
            xp: state.xp,
            level: state.level,
            current_streak: state.streak,
            last_active_date: state.lastActiveDate,
            updated_at: new Date().toISOString()
          }, { onConflict: 'user_id' });
          
          if (error) console.error("Failed to save gamification to DB", error);
        } catch (err) {
          console.error("Gamification DB save error:", err);
        }
      };

      const timeoutId = setTimeout(saveToDb, 1500); // Debounce DB writes
      return () => clearTimeout(timeoutId);
    }
  }, [state, loaded, currentUser]);

  const checkStreak = () => {
    const today = new Date().toISOString().split('T')[0];
    if (state.lastActiveDate !== today) {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yesterdayStr = yesterday.toISOString().split('T')[0];

      setState(prev => ({
        ...prev,
        streak: prev.lastActiveDate === yesterdayStr ? prev.streak + 1 : 1,
        lastActiveDate: today,
        dailyGoalProgress: 0, // Reset daily goal on new day
      }));
    }
  };

  useEffect(() => {
    checkStreak();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addXP = (amount: number, reason: string) => {
    console.log(`+${amount} XP: ${reason}`); // In a real app, this would trigger a toast notification
    
    setState(prev => {
      let newXp = prev.xp + amount;
      let newLevel = prev.level;
      let newProgress = prev.dailyGoalProgress + amount;
      
      // Level up logic (every 500 XP = 1 level for simplicity)
      const requiredXp = newLevel * 500;
      if (newXp >= requiredXp) {
        newLevel++;
        console.log(`Level Up! You are now level ${newLevel}`);
      }

      return {
        ...prev,
        xp: newXp,
        level: newLevel,
        dailyGoalProgress: newProgress
      };
    });
  };

  const resetDailyGoal = () => {
    setState(prev => ({ ...prev, dailyGoalProgress: 0 }));
  };

  return (
    <GamificationContext.Provider value={{ ...state, addXP, resetDailyGoal, checkStreak }}>
      {children}
    </GamificationContext.Provider>
  );
};

export const useGamification = () => {
  const context = useContext(GamificationContext);
  if (!context) {
    throw new Error('useGamification must be used within a GamificationProvider');
  }
  return context;
};
