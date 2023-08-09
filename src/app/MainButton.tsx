import Link from "next/link";
import React from "react";
import { MainButtonProps } from "./types";

function MainButton({ href, children }: MainButtonProps) {
  return (
    <Link
      href={href}
      className="px-6 py-4 md:px-10 md:py-8 bg-cyan-600 text-white text-2xl md:text-4xl font-bold rounded-md shadow-xl hover:bg-cyan-700 hover:shadow-inner hover:scale-105 hover:-translate-y-1 transition-all duration-200"
    >
      {children}
    </Link>
  );
}

export default MainButton;
