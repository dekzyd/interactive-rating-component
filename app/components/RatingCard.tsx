"use client";
import Image from "next/image";
import { useRating } from "@/store/ratingStore";
import { useSubmission } from "@/store/submissionStore";

const RatingCard = () => {
  const { rating, updateRating } = useRating();
  const { updateSubmission } = useSubmission();

  const handleSubmission = () => {
    if (rating === 0) {
      alert("Please select a rating before submitting.");
      return;
    }
    updateSubmission(true);
  };

  return (
    <div className="max-w-sm bg-grey-950 p-5 rounded-xl flex flex-col space-y-5 md:space-y-8">
      <span className="logo">
        <Image
          src="/images/icon-star.svg"
          alt="logo"
          width={30}
          height={30}
          className=" p-2 bg-grey-900 rounded-full"
        />
      </span>
      <h2 className="text-2xl font-semibold">How did we do?</h2>
      <p className="text-grey-500">
        Please let us know how we did with your support request. All feedback is
        appreciated! to help us improve our offering!
      </p>
      <div>
        <div className="buttons mb-5 md:mb-8 flex justify-around">
          {Array.from({ length: 5 }).map((_, index) => (
            <button
              className={`h-12 w-12 font-semibold text-lg pt-1 bg-grey-900 ${rating === index + 1 ? "bg-white text-grey-950" : "bg-grey-900"} rounded-full hover:bg-orange-500 cursor-pointer hover:text-grey-950`}
              key={`rating-${index + 1}`}
              onClick={() => updateRating(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <button
          className="text-lg tracking-wide text-grey-950 font-semibold bg-orange-500 w-full p-2 rounded-3xl hover:bg-white cursor-pointer"
          onClick={handleSubmission}
        >
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default RatingCard;
