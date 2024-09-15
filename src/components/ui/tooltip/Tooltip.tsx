import React, { useLayoutEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { twMerge } from "tailwind-merge";

interface TooltipProps {
  className?: string;
  children: React.ReactNode;
  targetRect: DOMRect | null;
}

export const Tooltip = ({ className, children, targetRect }: TooltipProps) => {
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ height: 0, width: 0 });

  useLayoutEffect(() => {
    if (tooltipRef.current) {
      const { width, height } = tooltipRef.current.getBoundingClientRect();
      setDimensions({ height, width });
    }
  }, [children]);

  const tooltipPosition = useMemo(() => {
    let tooltipX = 0;
    let tooltipY = 0;
    let overflowX = 0;

    if (targetRect) {
      const { innerWidth } = window;
      overflowX = targetRect.left + dimensions.width - innerWidth;
      tooltipY = targetRect.top - dimensions.height + window.scrollY;
      tooltipX = targetRect.left - dimensions.width / 2 + targetRect.width / 2;

      if (overflowX > 0) {
        tooltipX -= overflowX / 2;
      }
    }

    return { tooltipX, tooltipY };
  }, [targetRect, dimensions]);

  return createPortal(
    <div
      style={{
        transform: `translate3d(${tooltipPosition.tooltipX}px, ${tooltipPosition.tooltipY}px, 0)`,
      }}
      className={twMerge(
        "pointer-events-none absolute left-0 top-0 z-[50]",
        className,
      )}
      ref={tooltipRef}
    >
      {children}
    </div>,
    document.getElementById("root")!,
  );
};
