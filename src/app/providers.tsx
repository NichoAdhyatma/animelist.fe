"use client";

import { NextUIProvider } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

export function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <NextUIProvider navigate={router.push}>
      {children}
      <ProgressBar
        height="2px"
        color="#338ef7"
        options={{ showSpinner: true }}
        shallowRouting
      />
    </NextUIProvider>
  );
}
