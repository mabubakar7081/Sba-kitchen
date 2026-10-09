import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  User,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  sendPasswordResetEmail
} from 'firebase/auth';
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore';
import { auth, googleProvider, db } from '../lib/firebase';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  isGuest: boolean;
  signInWithEmail: (email: string, pass: string) => Promise<void>;
  signUpWithEmail: (email: string, pass: string, name: string) => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  signInAsGuest: () => void;
  logout: () => Promise<void>;
  sendPasswordReset: (email: string) => Promise<void>;
  authError: string | null;
  setAuthError: (err: string | null) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [isGuest, setIsGuest] = useState<boolean>(() => {
    return localStorage.getItem('zaiqa_is_guest') === 'true';
  });
  const [authError, setAuthError] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        setIsGuest(false);
        localStorage.removeItem('zaiqa_is_guest');

        // Ensure user document exists in firestore
        try {
          const userRef = doc(db, 'users', currentUser.uid);
          const snap = await getDoc(userRef);
          if (!snap.exists()) {
            await setDoc(userRef, {
              uid: currentUser.uid,
              email: currentUser.email || '',
              displayName: currentUser.displayName || 'Kitchen Chef',
              photoURL: currentUser.photoURL || '',
              createdAt: serverTimestamp(),
              lastLoginAt: serverTimestamp(),
            }, { merge: true });
          } else {
            await setDoc(userRef, {
              lastLoginAt: serverTimestamp(),
            }, { merge: true });
          }
        } catch (e) {
          console.warn('Firestore user sync warning:', e);
        }
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signInWithEmail = async (email: string, pass: string) => {
    setAuthError(null);
    try {
      await signInWithEmailAndPassword(auth, email, pass);
      setIsGuest(false);
      localStorage.removeItem('zaiqa_is_guest');
    } catch (err: unknown) {
      const error = err as { code?: string; message?: string };
      setAuthError(getFriendlyErrorMessage(error.code || ''));
      throw err;
    }
  };

  const signUpWithEmail = async (email: string, pass: string, name: string) => {
    setAuthError(null);
    try {
      const cred = await createUserWithEmailAndPassword(auth, email, pass);
      if (name.trim()) {
        await updateProfile(cred.user, {
          displayName: name.trim()
        });
      }
      // Save initial profile in Firestore
      await setDoc(doc(db, 'users', cred.user.uid), {
        uid: cred.user.uid,
        email: cred.user.email || email,
        displayName: name.trim() || 'Kitchen Chef',
        createdAt: serverTimestamp(),
        lastLoginAt: serverTimestamp(),
      });
      setIsGuest(false);
      localStorage.removeItem('zaiqa_is_guest');
    } catch (err: unknown) {
      const error = err as { code?: string; message?: string };
      setAuthError(getFriendlyErrorMessage(error.code || ''));
      throw err;
    }
  };

  const signInWithGoogle = async () => {
    setAuthError(null);
    try {
      await signInWithPopup(auth, googleProvider);
      setIsGuest(false);
      localStorage.removeItem('zaiqa_is_guest');
    } catch (err: unknown) {
      const error = err as { code?: string; message?: string };
      if (error.code !== 'auth/popup-closed-by-user') {
        setAuthError(getFriendlyErrorMessage(error.code || ''));
      }
      throw err;
    }
  };

  const signInAsGuest = () => {
    setIsGuest(true);
    localStorage.setItem('zaiqa_is_guest', 'true');
    setAuthError(null);
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      setIsGuest(false);
      localStorage.removeItem('zaiqa_is_guest');
    } catch (err: unknown) {
      console.error('Logout error:', err);
    }
  };

  const sendPasswordReset = async (email: string) => {
    setAuthError(null);
    try {
      await sendPasswordResetEmail(auth, email);
    } catch (err: unknown) {
      const error = err as { code?: string; message?: string };
      setAuthError(getFriendlyErrorMessage(error.code || ''));
      throw err;
    }
  };

  const getFriendlyErrorMessage = (code: string): string => {
    switch (code) {
      case 'auth/invalid-email':
        return 'Invalid email address format / غلط ای میل ایڈریس';
      case 'auth/user-not-found':
        return 'No user found with this email / اس ای میل پر اکاؤنٹ نہیں ملا';
      case 'auth/wrong-password':
      case 'auth/invalid-credential':
        return 'Incorrect email or password / ای میل یا پاس ورڈ غلط ہے';
      case 'auth/email-already-in-use':
        return 'An account already exists with this email / یہ ای میل پہلے سے رجسٹرڈ ہے';
      case 'auth/weak-password':
        return 'Password should be at least 6 characters / پاس ورڈ کم از کم 6 ہندسوں کا ہونا چاہیے';
      case 'auth/popup-closed-by-user':
        return 'Sign in was cancelled / سائن ان کینسل کر دیا گیا';
      default:
        return 'Authentication failed. Please verify credentials and try again.';
    }
  };

  return (
    <AuthContext.Provider value={{
      user,
      loading,
      isGuest,
      signInWithEmail,
      signUpWithEmail,
      signInWithGoogle,
      signInAsGuest,
      logout,
      sendPasswordReset,
      authError,
      setAuthError
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return ctx;
};
