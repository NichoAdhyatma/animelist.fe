// app/components/ThemeSwitcher.tsx
"use client";

import { Switch } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { SunIcon } from "./SunIcon";
import { MoonIcon } from "./MoonIcon";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Switch
      defaultSelected={theme === "dark" ? true : false}
      size="md"
      onValueChange={(value: boolean) => {
        value ? setTheme("dark") : setTheme("light");
      }}
      startContent={<MoonIcon />}
      endContent={<SunIcon />}
    ></Switch>
  );
}
