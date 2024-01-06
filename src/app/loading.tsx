import { Spinner } from "@nextui-org/react";

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Spinner label="Loading..." size="lg" color="primary" />
    </div>
  );
}
