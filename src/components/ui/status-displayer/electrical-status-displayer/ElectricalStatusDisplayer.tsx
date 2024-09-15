import { Icons } from '@/icons/Icons';
import { Status } from '@/services/company';
import { twMerge } from 'tailwind-merge';

interface ElectricalStatusDisplayerProps {
    className?: string
    status?: Status;
}

const STATUS_COLOR_DICTIONARY: Record<Status | string, string> = {
    "operating": "text-green-600",
    "alert": "text-red-600",
    "": "text-gray-600",
};

export const ElectricalStatusDisplayer = ({ className, status }: ElectricalStatusDisplayerProps) => {
    return (
        <Icons.ENERGY className={twMerge(STATUS_COLOR_DICTIONARY[status], className)} />
    );
}