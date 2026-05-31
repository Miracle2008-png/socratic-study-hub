import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';

interface PremiumContextType {
  freeInsights: number;
  isPro: boolean;
  useInsight: () => boolean; // Returns true if an Insight was successfully used, false if out of Insights
}

const PremiumContext = createContext<PremiumContextType | undefined>(undefined);

export const PremiumProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { currentUser } = useAuth();
  const [freeInsights, setFreeInsights] = useState<number>(3);
  const [showToast, setShowToast] = useState(false);

  // For this MVP, users with specific emails are admins (and thus Pro). 
  const isPro = currentUser?.email === 'miraclechimdindu2008@gmail.com' || currentUser?.email === 'miraclechimdindu2025@gmail.com';

  useEffect(() => {
    // Determine which storage key to use based on authentication status
    const storageKey = currentUser?.email ? `lumen_user_insights_${currentUser.email}` : 'lumen_guest_insights';
    const maxInsights = currentUser ? 10 : 3;
    
    const savedInsights = localStorage.getItem(storageKey);
    if (savedInsights !== null) {
      setFreeInsights(parseInt(savedInsights, 10));
    } else {
      setFreeInsights(maxInsights);
      localStorage.setItem(storageKey, maxInsights.toString());
    }
  }, [currentUser]);

  const useInsight = () => {
    if (isPro) return true; // Pro users never use up Insights
    
    if (freeInsights > 0) {
      const newInsights = freeInsights - 1;
      setFreeInsights(newInsights);
      
      const storageKey = currentUser?.email ? `lumen_user_insights_${currentUser.email}` : 'lumen_guest_insights';
      localStorage.setItem(storageKey, newInsights.toString());
      
      // Show toast
      setShowToast(true);
      setTimeout(() => setShowToast(false), 4000);
      
      return true;
    }
    return false; // Out of Insights
  };

  return (
    <PremiumContext.Provider value={{ freeInsights, isPro, useInsight }}>
      {children}
      {showToast && !isPro && freeInsights > 0 && (
        <div className="premium-toast fade-in">
          <span>{freeInsights} Free Insight{freeInsights !== 1 ? 's' : ''} Remaining</span>
        </div>
      )}
      <style>{`
        .premium-toast {
          position: fixed;
          bottom: 40px;
          right: 40px;
          background: rgba(20, 20, 20, 0.95);
          border: 1px solid var(--color-accent);
          color: white;
          padding: 16px 24px;
          border-radius: 12px;
          font-family: var(--font-display);
          font-weight: 600;
          box-shadow: 0 10px 30px rgba(212, 175, 55, 0.2);
          z-index: 9999;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .premium-toast::before {
          content: '✨';
          font-size: 20px;
        }
      `}</style>
    </PremiumContext.Provider>
  );
};

export const usePremium = () => {
  const context = useContext(PremiumContext);
  if (context === undefined) {
    throw new Error('usePremium must be used within a PremiumProvider');
  }
  return context;
};
