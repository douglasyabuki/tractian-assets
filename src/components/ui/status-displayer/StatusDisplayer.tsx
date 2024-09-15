import { useEventListeners } from "@/hooks/use-event-listeners";
import { useTargetRect } from "@/hooks/use-target-rect";
import { SensorType, StatusType } from "@/interfaces/interfaces";
import { twMerge } from "tailwind-merge";
import { Tooltip } from "../tooltip/Tooltip";
import { ElectricalStatusDisplayer } from "./electrical-status-displayer/ElectricalStatusDisplayer";
import { MechanicalStatusDisplayer } from "./mechanical-status-displayer/MechanicalStatusDisplayer";

type SizeVariants = "small" | "medium" | "large";

interface StatusDisplayerProps {
  className?: string;
  status?: StatusType;
  size?: SizeVariants;
  sensorType?: SensorType;
}

const CLOSE_KEYS = ["ArrowDown", "ArrowUp", "PageDown", "PageUp", "Escape"];

export const StatusDisplayer = ({
  className,
  status,
  sensorType = "vibration",
  size = "medium",
}: StatusDisplayerProps) => {
  const { componentRef, targetRect, getTargetRect, clearTargetRect } =
    useTargetRect();

  const handleKeydown = (event: KeyboardEvent) => {
    if (CLOSE_KEYS.includes(event.key) && targetRect) {
      clearTargetRect();
    }
  };

  useEventListeners({
    eventListeners: [{ eventName: "keydown", handler: handleKeydown }],
  });

  return (
    <>
      <div
        className="flex h-fit w-fit items-center justify-center"
        onPointerEnter={getTargetRect}
        onPointerLeave={clearTargetRect}
        ref={componentRef}
      >
        {sensorType === "energy" ? (
          <ElectricalStatusDisplayer className={twMerge(className)} status={status} size={size}/>
        ) : (
          <MechanicalStatusDisplayer className={twMerge(className)} status={status} size={size}/>
        )}
      </div>
      {targetRect && (
        <Tooltip
          targetRect={targetRect}
          className={twMerge(
            "rounded-md border-[1px] border-gray-400 bg-slate-800/90 px-2 py-1 text-slate-200",
          )}
        >
          Status: {status}
        </Tooltip>
      )}
    </>
  );
};
