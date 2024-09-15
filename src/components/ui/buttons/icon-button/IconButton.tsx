import React from "react";
import { twMerge } from "tailwind-merge";

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  Icon: React.ReactNode;
}

export const IconButton = ({ className, Icon, ...props }: IconButtonProps) => {
  return (
    <button
      className={twMerge(
        "flex size-[1.25rem] items-center justify-center rounded-sm",
        className,
      )}
      {...props}
    >
      {Icon}
    </button>
  );
};
