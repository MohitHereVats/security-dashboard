import React from "react";

type RatingBarProps = {
  rating: number; // 0-100
};

export const RatingBar: React.FC<RatingBarProps> = ({ rating }) => {
  const width = Math.max(0, Math.min(100, rating)); // Ensure 0-100 range

  return (
    <div className="w-full h-2 bg-brand-gray-200 rounded-full overflow-hidden">
      <div
        className="h-2 bg-brand-purple rounded-full"
        style={{ width: `${width}%` }}
        aria-label={`Rating: ${rating} out of 100`}
        role="progressbar"
        aria-valuenow={rating}
        aria-valuemin={0}
        aria-valuemax={100}
      />
    </div>
  );
};
