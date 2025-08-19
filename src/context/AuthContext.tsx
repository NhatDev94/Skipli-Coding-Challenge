import { createContext, useState, type ReactNode } from "react";

type User = {
  phoneNumber: string;
  email?: string;
  name: string;
  avatar?: string;
  role: string;
};

type AuthContextType = {
  user: User | null;
  token: string | null;
  signIn: (user: User, token: string) => void;
  signOut: () => void;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(
    localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user") || "")
      : null
  );
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("token")
      ? JSON.parse(localStorage.getItem("token") || "")
      : null
  );

  const signIn = (user: User, token: string) => {
    setUser(user);
    setToken(token);
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", JSON.stringify(token));
  };

  const signOut = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ user, token, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
