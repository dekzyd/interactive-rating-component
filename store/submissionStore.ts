import { create } from "zustand";
import { SubmissionStore } from "@/lib/types";

export const useSubmission = create<SubmissionStore>((set) => ({
  isSubmitted: false,
  updateSubmission: (newSubmission) => set({ isSubmitted: newSubmission }),
}));
