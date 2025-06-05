import { createContext, useContext, useState, useEffect } from 'react';
import { 
  onAuthStateChange as firebaseOnAuthStateChange, 
  signIn as firebaseSignIn, 
  signUp as firebaseSignUp, 
  signOutUser as firebaseSignOut 
} from '../services/auth/firebase';

// Create and export the auth context with default values
export const AuthContext = createContext({
  user: null,
  loading: true,
  error: null,
  signIn: async () => ({}),
  signUp: async () => ({}),
  signOut: async () => ({})
});

// Custom hook to use the auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Subscribe to auth state changes
  useEffect(() => {
    const unsubscribe = firebaseOnAuthStateChange((currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  // Sign in with email and password
  const signIn = async (email, password) => {
    try {
      setLoading(true);
      const { error: authError } = await firebaseSignIn(email, password);
      if (authError) throw new Error(authError);
      return { success: true };
    } catch (err) {
      const errorMessage = err.message || 'Failed to sign in';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  // Sign up new user
  const signUp = async (email, password, displayName) => {
    try {
      setLoading(true);
      const { error: authError } = await firebaseSignUp(email, password, displayName);
      if (authError) throw new Error(authError);
      return { success: true };
    } catch (err) {
      const errorMessage = err.message || 'Failed to create account';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  // Sign out current user
  const signOut = async () => {
    try {
      setLoading(true);
      const { error: authError } = await firebaseSignOut();
      if (authError) throw new Error(authError);
      setUser(null);
      return { success: true };
    } catch (err) {
      const errorMessage = err.message || 'Failed to sign out';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  const contextValue = {
    user,
    loading,
    error,
    signIn,
    signUp,
    signOut
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};
