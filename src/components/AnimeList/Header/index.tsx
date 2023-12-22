import { Link } from "@nextui-org/react";
import React from "react";

export default function Header({
  title,
  href,
  linkLabel,
}: {
  title: string;
  href?: string;
  linkLabel?: string;
}) {
  return (
    <div className="flex justify-between items-center w-full my-2">
      <h1 className="text-2xl font-bold">{title}</h1>
      <Link showAnchorIcon isBlock href={href ?? "/"}>{linkLabel ?? "See All"}</Link>
    </div>
  );
}
