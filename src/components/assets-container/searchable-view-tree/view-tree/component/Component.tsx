import { Icons } from "@/icons/Icons";
import { IAsset } from "@/interfaces/interfaces";
import { twMerge } from "tailwind-merge";

interface ComponentProps extends IAsset {
  onComponentSelect: () => void;
}

export const Component = ({
  gatewayId,
  name,
  sensorType,
  status,
  onComponentSelect,
}: ComponentProps) => {
  return (
    <button
      className="flex w-full items-center justify-between gap-2 pl-3 text-sm uppercase"
      onClick={onComponentSelect}
    >
      <div className="flex w-full items-center justify-start gap-2">
        <Icons.COMPONENT className="text-white" />
        {name}
      </div>
      {gatewayId}
      {sensorType === "energy" && <Icons.ENERGY />}
      {
        <span
          className={twMerge(
            "size-2 rounded-full",
            status === "alert" && "bg-red-600",
            status === "operating" && "bg-green-600",
            !status && "bg-gray-600",
          )}
        />
      }
    </button>
  );
};
