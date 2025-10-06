import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useEffect,
} from "react";

// Define user details structure
interface UserDetails {
  id: string;
  name: string;
  email: string;
  phone?: string;
}

// Define context type
interface AuthContextType {
  userDetails: UserDetails | null;
  isLoggedIn: boolean;
  signIn: (userData: UserDetails) => void;
  signOut: () => void;
}

// Create context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Provider component
const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);

  // Load user from localStorage on app start
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUserDetails(JSON.parse(storedUser));
    }
  }, []);

  const isLoggedIn = !!userDetails;

  const signIn = (userData: UserDetails) => {
    setUserDetails(userData);

    //TODO:After the api intergration
    // localStorage.setItem("user", JSON.stringify(userData));
  };

  const signOut = () => {
    setUserDetails(null);

    //TODO:After the api intergration
    // localStorage.removeItem("user"); 
  };

  const value = useMemo(
    () => ({ userDetails, isLoggedIn, signIn, signOut }),
    [userDetails, isLoggedIn]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Custom hook for consuming the context
const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);

  //Optional Check if the context is available
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export { AuthProvider, useAuth };
