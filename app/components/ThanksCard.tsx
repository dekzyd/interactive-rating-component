"use client";
import Image from "next/image";
import { useRating } from "@/store/ratingStore";

const ThanksCard = () => {
  const { rating } = useRating();

  return (
    <div className="max-w-sm bg-grey-950 p-5 rounded-xl flex flex-col items-center space-y-7 md:space-y-8">
      <Image
        src="/images/illustration-thank-you.svg"
        alt="logo"
        width={170}
        height={100}
        className="mt-3"
      />
      <div className="px-3 py-1 text-base text-orange-500 bg-grey-900 rounded-full">
        You selected {rating} out of 5
      </div>
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-center">Thank You</h2>
        <p className="text-grey-500 text-center">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </div>
    </div>
  );
};

export default ThanksCard;
