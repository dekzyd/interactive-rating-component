import { create } from "zustand";
import { RatingStore } from "@/lib/types";

export const useRating = create<RatingStore>((set) => ({
  rating: 0,
  updateRating: (newRating) => set({ rating: newRating }),
}));
