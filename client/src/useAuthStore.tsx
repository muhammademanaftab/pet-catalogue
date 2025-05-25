import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthStoreState {
  email: string;
  token: string | null;
  isAuthenticated: boolean;
  login: (email: string, token: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthStoreState>()(
  persist(
    (set) => ({
      email: "",
      token: null,
      isAuthenticated: false,
      login: (email: string, token: string) => 
        set({ email, token, isAuthenticated: true }),
      logout: () => 
        set({ email: "", token: null, isAuthenticated: false }),
    }),
    {
      name: "pet-auth-storage",
    }
  )
);