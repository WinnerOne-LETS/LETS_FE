import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface Props {
  scrollY: number;
  setScrollY: (state: number) => void;
  setScrollYZero: VoidFunction;
}

const useScrollYStore = create<Props>()(
  persist(
    (set) => ({
      scrollY: 0,
      setScrollY: (state) => set({ scrollY: state }),
      setScrollYZero: () => set({ scrollY: 0 }),
    }),
    {
      name: "sy",
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);

export default useScrollYStore;
