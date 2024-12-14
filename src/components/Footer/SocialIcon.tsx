"use client";

import Link from "next/link";

export interface SocialIconProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  className?: string;
}

export const SocialIcon = ({
  href,
  icon,
  label,
  className,
}: SocialIconProps) => {
  return (
    <Link
      href={href}
      className={`p-2 rounded-full transition-all duration-300 hover:scale-110 hover:bg-white/10 group ${
        className || ""
      }`}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="text-white/80 group-hover:text-white">{icon}</div>
    </Link>
  );
};
