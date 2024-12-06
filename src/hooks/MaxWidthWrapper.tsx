"use client";

import React, { ReactNode } from "react";
import clsx from "classnames";

interface MaxWidthWrapperProps {
  children: ReactNode;
  className?: string;
  size?: "default" | "small" | "medium" | "large";
}

const MaxWidthWrapper: React.FC<MaxWidthWrapperProps> = ({ 
  children, 
  className = "",
  size = "default" 
}) => {
  const maxWidthClass = {
    small: "max-w-5xl",
    default: "max-w-7xl",
    medium: "max-w-8xl",
    large: "max-w-[1920px]"
  }[size];

  return (
    <div
      className={clsx(
        maxWidthClass,
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        className
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;