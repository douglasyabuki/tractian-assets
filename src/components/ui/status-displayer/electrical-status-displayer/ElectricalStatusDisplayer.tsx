import { Icons } from "@/icons/Icons";
import { StatusType } from "@/interfaces/interfaces";
import { twMerge } from "tailwind-merge";

type SizeVariants = "small" | "medium" | "large";

const SIZE_STYLE_DICTIONARY: Record<SizeVariants, string> = {
  small: "size-3",
  medium: "size-4",
  large: "size-5",
};
interface ElectricalStatusDisplayerProps {
  className?: string;
  status?: StatusType;
  size?: SizeVariants;
}

const STATUS_COLOR_DICTIONARY: Record<StatusType | string, string> = {
  operating: "text-green-600",
  alert: "text-red-600",
  "": "text-gray-600",
};

export const ElectricalStatusDisplayer = ({
  className,
  status,
  size = "medium",
}: ElectricalStatusDisplayerProps) => {
  return (
    <Icons.ENERGY_FILLED
      className={twMerge(
        STATUS_COLOR_DICTIONARY[status || ""],
        SIZE_STYLE_DICTIONARY[size || ""],
        className,
      )}
    />
  );
};
