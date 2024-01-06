import BackButton from "@/components/Util/BackButton";
import React from "react";

export default function Page() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <p className="text-lg my-4 font font-semibold">404 - Not Found</p>
      <BackButton />
    </div>
  );
}
