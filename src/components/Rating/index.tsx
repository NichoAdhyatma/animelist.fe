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
  readOnly,
}: {
  rating?: number;
  setRating?: RatingChange;
  readOnly?: boolean;
}) {
  const ratingStyle: ItemStyles = {
    itemShapes: RoundedStar,
    activeFillColor: "#ffb700",
    inactiveFillColor: "#454444",
  };

  return (
    <Rating
      isRequired
      readOnly={readOnly}
      style={{ maxWidth: 150 }}
      value={rating ?? 0}
      onChange={setRating}
      itemStyles={ratingStyle}
      radius="full"
      className="my-4"
    />
  );
}
