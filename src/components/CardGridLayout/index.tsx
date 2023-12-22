import React from "react";

export default function CardGridLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid justify-center grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {children}
    </div>
  ); 
}
