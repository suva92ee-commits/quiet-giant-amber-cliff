import { create } from "zustand";

type PlayerStore = {
  activeId: string | null;
  playing: boolean;
  play: (id: string) => void;
  pause: () => void;
  toggle: (id: string) => void;
};

export const usePlayerStore = create<PlayerStore>((set, get) => ({
  activeId: null,
  playing: false,
  play: (id) => set({ activeId: id, playing: true }),
  pause: () => set({ playing: false }),
  toggle: (id) => {
    const { activeId, playing } = get();
    if (activeId === id && playing) set({ playing: false });
    else set({ activeId: id, playing: true });
  },
}));
