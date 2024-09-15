import * as React from 'react';
import { twMerge } from 'tailwind-merge';

interface DataFieldProps {
    className?: string;
    label: string;
    Icon?: React.ReactNode;
    value: string;
}

export const DataField = ({ className, label, Icon, value }: DataFieldProps) => {
    return (
        <div className={twMerge('flex flex-col gap-2 text-blue-400', className)}>
            <h4 className='font-semibold leading-6'>{label}</h4>
            <div className='gap-2 items-center h-6 flex'>
                {Icon}
                <p className='leading-6 text-gray-200'>{value}</p>
            </div>
        </div>
    );
}