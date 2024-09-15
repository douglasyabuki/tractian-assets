import { useDragAndDrop } from "@/hooks/use-drag-and-drop";
import { useLocalStorage } from "@/hooks/use-local-storage";
import { Icons } from "@/icons/Icons";
import { readImageFile } from "@/utils/util-file";
import React, { useRef } from "react";
import { twMerge } from "tailwind-merge";
import { ImagePreview } from "./image-preview/ImagePreview";

interface ImageFieldProps {
  id: string;
}

export const ImageField = ({ id }: ImageFieldProps) => {
  const { storedValue, setValue, removeValue } = useLocalStorage(id, null);
  const { isDragging, onDragOver, onDragLeave, onDrop } = useDragAndDrop(
    (file) => {
      readImageFile(file, setValue);
    },
  );
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      readImageFile(file, setValue);
    }
  };

  return (
    <div
      className={twMerge(
        "group relative box-border h-[14.125rem] w-[21rem] overflow-hidden border-[1px] border-white/20 bg-gray-900",
        storedValue && "border-[0px]",
      )}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
    >
      {storedValue ? (
        <ImagePreview
          src={storedValue}
          alt={"Stored Image Preview"}
          onRemove={removeValue}
        />
      ) : (
        <div
          className="flex h-full w-full p-2"
          onClick={() => inputRef.current?.click()}
        >
          <div
            className={twMerge(
              "flex h-full w-full flex-col items-center justify-center gap-4 rounded-md border-[0px] border-dashed border-current opacity-50 transition-all duration-150",
              isDragging && "border-[1px] opacity-100",
            )}
          >
            <Icons.ACTIVE />
            <p>Drag and drop here or click to upload</p>
          </div>
        </div>
      )}
      <input
        type="file"
        onChange={onFileChange}
        className="hidden"
        accept="image/*"
        ref={inputRef}
      />
    </div>
  );
};
