import { Icons } from "@/icons/Icons";
import { useId } from "react";
import { twMerge } from "tailwind-merge";

interface SearchBarProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const SearchBar = ({ label, ...props }: SearchBarProps) => {
  const id = useId();

  return (
    <div className="rounded-base group relative box-border flex h-auto w-auto items-center justify-start px-4">
      <input
        type="text"
        id={id}
        className="peer h-full min-h-10 w-full flex-grow appearance-none bg-transparent text-sm outline-none"
        {...props}
      />
      <label
        className={twMerge("text-sm tracking-tight", !label && "hidden")}
        htmlFor={id}
      >
        {label}
      </label>
      <Icons.SEARCH />
    </div>
  );
};
