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
    <div className="flex justify-between items-center w-full mb-4">
      <h1 className="text-xl font-bold">{title}</h1>
      {linkLabel && (
        <Link showAnchorIcon isBlock href={href}>
          {linkLabel}
        </Link>
      )}
    </div>
  );
}
