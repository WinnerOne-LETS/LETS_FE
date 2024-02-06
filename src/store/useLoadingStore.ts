import { create } from "zustand";

interface Props {
  isLoading: boolean;
  setLoadingTrue: VoidFunction;
  setLoadingFalse: VoidFunction;
}

const useLoadingStore = create<Props>((set) => ({
  isLoading: false,
  setLoadingTrue: () => set({ isLoading: true }),
  setLoadingFalse: () => set({ isLoading: false }),
}));

export default useLoadingStore;
