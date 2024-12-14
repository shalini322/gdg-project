"use client";

import Link from "next/link";

export interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export const NavLink = ({ href, children, className }: NavLinkProps) => {
  return (
    <Link
      href={href}
      className={`text-white/80 hover:text-white transition-colors duration-300 text-sm hover:scale-105 transform ${
        className || ""
      }`}
    >
      {children}
    </Link>
  );
};
