import React, { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { useAuth } from './AuthContext';
import { db, doc, getDoc, setDoc } from '../utils/firebase';

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

  // Fetch from Firestore
  useEffect(() => {
    const fetchProgress = async () => {
      if (!currentUser || !db) return;
      try {
        const userRef = doc(db, 'users', currentUser.uid);
        const userSnap = await getDoc(userRef);
        if (userSnap.exists()) {
          setState(userSnap.data() as GamificationState);
        }
      } catch (err) {
        console.error("Failed to load cloud save", err);
      } finally {
        setLoaded(true);
      }
    };
    fetchProgress();
  }, [currentUser]);

  // Save to Firestore
  useEffect(() => {
    if (loaded && currentUser && db) {
      const saveProgress = async () => {
        try {
          const userRef = doc(db, 'users', currentUser.uid);
          await setDoc(userRef, state, { merge: true });
        } catch (err) {
          console.error("Failed to cloud save", err);
        }
      };
      saveProgress();
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
