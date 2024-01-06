import { CircularProgress } from "@nextui-org/react";

export default function Loading() {
  return (
    <div className="flex justify-center items-center">
      <CircularProgress size="lg" color="primary" />
    </div>
  );
}