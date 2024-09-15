import { Icons } from '@/icons/Icons';
import { twMerge } from 'tailwind-merge';
import { IconButton } from '../icon-button/IconButton';

interface DropdownButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    isToggled: boolean;
    onToggle: () => void;
}

export const DropdownButton = ({ className, isToggled, onToggle, ...props }: DropdownButtonProps) => {
    return (
        <IconButton
            className={twMerge('', className)}
            Icon={
                <Icons.ARROW_DOWN className={twMerge("transition-transform duration-150 ease-in-out",
                    isToggled && 'rotate-180')}
                />
            }
            onClick={onToggle}
            {...props}
        />
    );
}