"use client";

import { Button } from "@nextui-org/react";
import { useRouter } from "next-nprogress-bar";
import { IoArrowBack } from "react-icons/io5";

export default function BackButton({ label }: { label?: string }) {
  const router = useRouter();

  return (
    <Button
      startContent={<IoArrowBack />}
      variant="light"
      onPress={() => router.back()}
    >
      {label ?? "Back"}
    </Button>
  );
}
