import { useEventListeners } from '@/hooks/use-event-listeners';
import { useTargetRect } from '@/hooks/use-target-rect';
import { SensorType, Status } from '@/services/company';
import { twMerge } from 'tailwind-merge';
import { Tooltip } from '../tooltip/Tooltip';
import { ElectricalStatusDisplayer } from './electrical-status-displayer/ElectricalStatusDisplayer';
import { MechanicalStatusDisplayer } from './mechanical-status-displayer/MechanicalStatusDisplayer';

type SizeVariants = "small" | "medium" | "large";

interface StatusDisplayerProps {
    className?: string;
    status?: Status;
    size?: SizeVariants;
    sensorType?: SensorType;
}

const STATUS_COLOR_DICTIONARY: Record<Status | string, string> = {
    "operating": "bg-green-600 text-green-600",
    "alert": "bg-red-600 text-red-600",
    "": "bg-gray-600 text-gray-600",
};

const SIZE_STYLE_DICTIONARY: Record<SizeVariants, string> = {
    "small": "size-2",
    "medium": "size-3",
    "large": "size-4",
};

const CLOSE_KEYS = ["ArrowDown", "ArrowUp", "PageDown", "PageUp", "Escape"];

export const StatusDisplayer = ({ className, status, sensorType = "vibration", size = "medium" }: StatusDisplayerProps) => {
    const { componentRef, targetRect, getTargetRect, clearTargetRect } = useTargetRect();

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
                className='flex w-fit h-fit items-center justify-center'
                onPointerEnter={getTargetRect}
                onPointerLeave={clearTargetRect}
                ref={componentRef}
            >
                {
                    sensorType === "energy"
                        ? <ElectricalStatusDisplayer className={twMerge(SIZE_STYLE_DICTIONARY[size], STATUS_COLOR_DICTIONARY[status], className)} />
                        : <MechanicalStatusDisplayer className={twMerge(SIZE_STYLE_DICTIONARY[size], STATUS_COLOR_DICTIONARY[status], className)} />
                }
            </div>
            {targetRect && (
                <Tooltip
                    targetRect={targetRect}
                    className={twMerge("px-2 py-1 text-slate-200 bg-slate-800/90 border-[1px] border-gray-400 rounded-md")}
                >
                    Status: {status}
                </Tooltip>
            )}
        </>
    );
};
