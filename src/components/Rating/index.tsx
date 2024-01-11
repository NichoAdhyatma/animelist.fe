"use client";

import {
  ItemStyles,
  Rating,
  RatingChange,
  RoundedStar,
} from "@smastrom/react-rating";

export default function RatingInput({
  rating,
  setRating,
}: {
  rating: number;
  setRating: RatingChange;
}) {
  const ratingStyle: ItemStyles = {
    itemShapes: RoundedStar,
    activeFillColor: "#ffb700",
    inactiveFillColor: "#454444",
  };

  return (
    <Rating
      isRequired
      style={{ maxWidth: 150 }}
      value={rating}
      onChange={setRating}
      itemStyles={ratingStyle}
      radius="full"
      className="mb-4"
    />
  );
}
