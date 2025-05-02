import { create } from "zustand";

type TypeUserStore = {
  isAuth: boolean;
  setIsAuth: () => void;
};

const useUserStore = create<TypeUserStore>((set) => ({
  isAuth: true,
  setIsAuth: () => set((state) => ({ isAuth: !state.isAuth })),
}));

export default useUserStore;
