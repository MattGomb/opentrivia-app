import SearchContextProvider from "@/context/ContextProvider";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AllKindsOfTrivia app",
  description: "All kinds of trivia - for all kinds of people",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-zinc-700 text-white">
        <SearchContextProvider>{children}</SearchContextProvider>
      </body>
    </html>
  );
}
