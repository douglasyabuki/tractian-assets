import { StatusType } from "@/interfaces/interfaces";
import { twMerge } from "tailwind-merge";

type SizeVariants = "small" | "medium" | "large";

const SIZE_STYLE_DICTIONARY: Record<SizeVariants, string> = {
  small: "size-2",
  medium: "size-3",
  large: "size-4",
};

interface MechanicalStatusDisplayerProps {
  className?: string;
  status?: StatusType;
  size?: SizeVariants;
}

const STATUS_COLOR_DICTIONARY: Record<StatusType | string, string> = {
  operating: "bg-green-600",
  alert: "bg-red-600",
  "": "bg-gray-600",
};

export const MechanicalStatusDisplayer = ({
  className,
  status,
  size = "medium",
}: MechanicalStatusDisplayerProps) => {
  return (
    <div
      className={twMerge(
        "rounded-full",
        STATUS_COLOR_DICTIONARY[status || ""],
        SIZE_STYLE_DICTIONARY[size || ""],
        className,
      )}
    />
  );
};
