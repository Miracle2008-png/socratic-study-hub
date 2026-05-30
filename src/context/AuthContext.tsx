import React, { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { supabase } from '../utils/supabase';
import { User } from '@supabase/supabase-js';

interface AuthContextType {
  currentUser: any | null;
  loading: boolean;
  mockLogin: (email: string) => void;
  mockLogout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for mock user first
    const mockUserStr = localStorage.getItem('lumen_mock_user');
    if (mockUserStr) {
      setCurrentUser(JSON.parse(mockUserStr));
      setLoading(false);
      return;
    }

    // Check active sessions and sets the user
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!mockUserStr) setCurrentUser(session?.user ?? null);
      setLoading(false);
    });

    // Listen for changes on auth state
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!localStorage.getItem('lumen_mock_user')) {
        setCurrentUser(session?.user ?? null);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const mockLogin = (email: string) => {
    const fakeUser = { email, user_metadata: { full_name: email.split('@')[0] } };
    localStorage.setItem('lumen_mock_user', JSON.stringify(fakeUser));
    setCurrentUser(fakeUser);
  };

  const mockLogout = () => {
    localStorage.removeItem('lumen_mock_user');
    setCurrentUser(null);
    supabase.auth.signOut();
  };

  return (
    <AuthContext.Provider value={{ currentUser, loading, mockLogin, mockLogout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

