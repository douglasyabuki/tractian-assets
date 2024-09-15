import { Status } from "@/services/company";
import { twMerge } from "tailwind-merge";

interface MechanicalStatusDisplayerProps {
  className?: string;
  status?: Status;
}

const STATUS_COLOR_DICTIONARY: Record<Status | string, string> = {
  operating: "bg-green-600",
  alert: "bg-red-600",
  "": "bg-gray-600",
};

export const MechanicalStatusDisplayer = ({
  className,
  status,
}: MechanicalStatusDisplayerProps) => {
  return (
    <div
      className={twMerge(
        "rounded-full",
        STATUS_COLOR_DICTIONARY[status],
        className,
      )}
    />
  );
};
