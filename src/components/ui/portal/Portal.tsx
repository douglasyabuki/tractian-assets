import { createPortal } from "react-dom";
import { twMerge } from "tailwind-merge";

type ScreenPosition =
  | "top"
  | "top_right"
  | "right"
  | "bottom_right"
  | "bottom"
  | "bottom_left"
  | "left"
  | "top_left"
  | "center";

interface PortalProps {
  className?: string;
  isToggled: boolean;
  onClose: () => void;
  children: React.ReactNode;
  positionOnScreen?: ScreenPosition;
  backdrop?: boolean;
};

const CHILDREN_POSITION_DICTIONARY: Record<ScreenPosition | string, string> = {
  top: "items-start justify-center",
  top_right: "items-start justify-end",
  right: "items-center justify-end",
  bottom_right: "items-end justify-end",
  bottom: "items-end justify-center",
  bottom_left: "items-end justify-start",
  left: "items-center justify-start",
  top_left: "items-start justify-start",
  center: "items-center justify-center",
};

export const Portal = ({
  className,
  isToggled,
  onClose,
  children,
  positionOnScreen = "center",
  backdrop = false,
}: PortalProps) => {
  return (
    <>
      {isToggled &&
        createPortal(
          <span
            className={twMerge(
              "min-w-screen absolute bottom-0 left-0 right-0 top-0 z-[52] flex min-h-screen transition-all duration-200 ease-in",
              backdrop && "backdrop-blur-sm",
              CHILDREN_POSITION_DICTIONARY[positionOnScreen],
              className,
            )}
            onClick={onClose}
          >
            {children}
          </span>,
          document.getElementById("root")!,
        )}
    </>
  );
};
