import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';

interface PremiumContextType {
  freeCredits: number;
  isPro: boolean;
  useCredit: () => boolean; // Returns true if a credit was successfully used, false if out of credits
}

const PremiumContext = createContext<PremiumContextType | undefined>(undefined);

const MAX_FREE_CREDITS = 3;

export const PremiumProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { currentUser } = useAuth();
  const [freeCredits, setFreeCredits] = useState<number>(MAX_FREE_CREDITS);
  const [showToast, setShowToast] = useState(false);

  // For this MVP, users with specific emails are admins (and thus Pro). 
  // Normally this would be checked against a Supabase table like 'user_subscriptions'.
  const isPro = currentUser?.email === 'miraclechimdindu2008@gmail.com' || currentUser?.email === 'miraclechimdindu2025@gmail.com';

  useEffect(() => {
    // Load credits from local storage
    const savedCredits = localStorage.getItem('lumen_free_credits');
    if (savedCredits !== null) {
      setFreeCredits(parseInt(savedCredits, 10));
    } else {
      setFreeCredits(MAX_FREE_CREDITS);
      localStorage.setItem('lumen_free_credits', MAX_FREE_CREDITS.toString());
    }
  }, []);

  const useCredit = () => {
    if (isPro) return true; // Pro users never use up credits
    
    if (freeCredits > 0) {
      const newCredits = freeCredits - 1;
      setFreeCredits(newCredits);
      localStorage.setItem('lumen_free_credits', newCredits.toString());
      
      // Show toast
      setShowToast(true);
      setTimeout(() => setShowToast(false), 4000);
      
      return true;
    }
    return false; // Out of credits
  };

  return (
    <PremiumContext.Provider value={{ freeCredits, isPro, useCredit }}>
      {children}
      {showToast && !isPro && freeCredits > 0 && (
        <div className="premium-toast fade-in">
          <span>{freeCredits} Free Premium Use{freeCredits !== 1 ? 's' : ''} Remaining</span>
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
