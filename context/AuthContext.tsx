import React, { createContext, useState, useContext, ReactNode } from "react";
import axios from "axios";

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextData {
  user: User | null;
  isAuthenticated: boolean;
  signUp: (userData: Omit<User, "id">, password: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const api = axios.create({
    baseURL: "http://localhost:3000",
  });

  const signUp = async (userData: Omit<User, "id">, password: string) => {
    console.log("Chamando signUp com:", userData, password); 
    try {
      const response = await api.post("/register", {
        ...userData,
        password,
      });
      console.log("Resposta do backend (signUp):", response.data);
      setUser(response.data.user);
    } catch (error: any) {
      console.error(
        "Erro ao cadastrar usuário:",
        error.response?.data || error.message
      );
      throw new Error(
        error.response?.data?.message || "Erro ao cadastrar usuário"
      );
    }
  };

  const login = async (email: string, password: string) => {
    console.log("Chamando login com:", email, password); 
    try {
      const response = await api.post("/login", { email, password });
      console.log("Resposta do backend (login):", response.data);
      setUser(response.data.user);
    } catch (error: any) {
      console.error(
        "Erro ao logar usuário:",
        error.response?.data || error.message
      );
      throw new Error(error.response?.data?.message || "Erro ao logar usuário");
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        signUp,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
