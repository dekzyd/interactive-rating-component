export interface RatingStore {
  rating: number;
  updateRating: (newRating: number) => void;
}

export interface SubmissionStore {
  isSubmitted: boolean;
  updateSubmission: (newSubmission: boolean) => void;
}
