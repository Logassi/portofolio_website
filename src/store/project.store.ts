import { create } from "zustand";
import { Project } from "@/types/project";
import { getAllProjects } from "@/lib/contentful"; // your fetch function

type ProjectState = {
  projects: Project[];
  isLoading: boolean;
  fetchProjects: () => Promise<void>;
};

export const useProjectStore = create<ProjectState>((set) => ({
  projects: [],
  isLoading: false,

  fetchProjects: async () => {
    set({ isLoading: true });
    try {
      const data = await getAllProjects();
      set({ projects: data, isLoading: false });
    } catch (err) {
      console.error("Failed to fetch projects:", err);
      set({ isLoading: false });
    }
  },
}));
