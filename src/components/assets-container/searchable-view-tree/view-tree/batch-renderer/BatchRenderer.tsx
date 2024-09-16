import { ILocation } from "@/interfaces/interfaces";
import { useEffect, useState } from "react";

interface BatchRendererProps<T> {
  items: T[];
  renderItem: (item: T) => JSX.Element;
  batchSize?: number;
  delay?: number;
}

export const BatchRenderer = <T extends ILocation>({
  items,
  renderItem,
  batchSize = 10,
  delay = 500,
}: BatchRendererProps<T>) => {
  const [visibleCount, setVisibleCount] = useState(batchSize);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (visibleCount < items.length) {
        setVisibleCount((prev) => prev + batchSize);
      }
    }, delay);

    return () => clearInterval(intervalId);
  }, [visibleCount, items.length, batchSize, delay]);

  return (
    <>
      {items.slice(0, visibleCount).map((item, index) => (
        <div key={index}>{renderItem(item)}</div>
      ))}
    </>
  );
};
