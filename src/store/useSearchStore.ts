import { create } from "zustand";
import { useShallow } from "zustand/shallow";

interface BearState {
  navInput: boolean;
  navScrool: boolean;
  setNavInput: (by: boolean) => void;
  setNavScrool: (by: boolean) => void;
}

const useSearchStore = create<BearState>()((set) => ({
  navInput: false,
  navScrool: false,
  setNavInput: (by) => set(() => ({ navInput: by })),
  setNavScrool: (by) => set(() => ({ navInput: by })),
}));

const useSearch = () => {
  const state = useSearchStore(
    useShallow((prev) => ({
      navInput: prev.navInput,
      navScrool: prev.navScrool,
      setNavInput: prev.setNavInput,
      setNavScrool: prev.setNavScrool,
    }))
  );

  return state;
};

export default useSearch;
