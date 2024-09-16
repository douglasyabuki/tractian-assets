import { useState } from "react";

export const useDragAndDrop = (onFileDrop: (file: File) => void) => {
  const [isDragging, setIsDragging] = useState(false);

  const onDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(true);
  };

  const onDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(false);
  };

  const onDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(false);

    const file = event.dataTransfer.files[0];
    onFileDrop(file);
  };

  return {
    isDragging,
    onDragOver,
    onDragLeave,
    onDrop,
  };
};
