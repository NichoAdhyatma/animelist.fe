import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import NavbarComponent from "../components/Navbar";
import UserActionButton from "@/components/Navbar/UserActionButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AnimeList",
  description: "List Anime Indonesia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Providers>
          <NavbarComponent>
            <UserActionButton />
          </NavbarComponent>
          
          <div className="max-w-7xl w-full mx-auto mt-2 p-4">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
