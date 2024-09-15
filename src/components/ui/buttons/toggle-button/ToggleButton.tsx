import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type SizeVariants = "small" | "medium" | "large";

const SIZE_STYLE_DICTIONARY: Record<SizeVariants, string> = {
  small: "h-8 w-[6.25rem] gap-2 px-2 py-[0.375rem] text-xs",
  medium: "h-10 w-[8.75rem] gap-2 px-4 py-2 text-sm",
  large: "h-12 w-40 gap-2 px-4 py-3 text-base",
};

interface ToggleButtonProps extends HTMLAttributes<HTMLButtonElement> {
  className?: string;
  isToggled?: boolean;
  children: React.ReactNode;
  size?: SizeVariants;
}

export const ToggleButton = ({
  className,
  isToggled,
  children,
  size = "medium",
  ...props
}: ToggleButtonProps) => {
  return (
    <button
      className={twMerge(
        "box-border flex min-h-fit min-w-fit items-center justify-center border-[1px] transition-all duration-150 disabled:pointer-events-none disabled:cursor-default disabled:opacity-50",
        SIZE_STYLE_DICTIONARY[size],
        isToggled ? "bg-slate-600" : "bg-slate-900 hover:bg-slate-600",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};
