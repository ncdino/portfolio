import { create } from "zustand";

const useTriggerStore = create((set) => ({
  profileRef: null,
  insightRef: null,
  worksRef: null,
  activeSectionId: null,
  skillRef: null,
  setWorksRef: (ref) => set({ worksRef: ref }),
  setProfileRef: (ref) => set({ profileRef: ref }),
  setInsightRef: (ref) => set({ insightRef: ref }),
  setSkillRef: (ref) => set({ skillRef: ref }),
  setActiveSectionId: (id) => set({ activeSectionId: id }),
}));

export default useTriggerStore;
