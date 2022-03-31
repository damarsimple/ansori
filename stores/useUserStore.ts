import create from "zustand";
import { User } from "../types";

interface UserStore {
  user: User | null;
  token: string | null;
  setUser: (user: User | null) => void;
  setToken: (token: string | null) => void;
}

export const useUserStore = create<UserStore>((set, get) => ({
  user: null,
  token: null,
  setUser: (user: User | null) => set({ user }),
  setToken: (token: string | null) => set({ token }),
}));
