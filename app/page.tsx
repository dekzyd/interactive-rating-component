"use client";
import RatingCard from "./components/RatingCard";
import ThanksCard from "./components/ThanksCard";
import { useSubmission } from "@/store/submissionStore";

export default function Home() {
  const { isSubmitted } = useSubmission();

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-overpass dark:bg-black px-4">
      {isSubmitted ? <ThanksCard /> : <RatingCard />}
    </div>
  );
}
