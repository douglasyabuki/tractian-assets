import { useEffect } from "react";

export type EventListener<T extends keyof WindowEventMap> = {
  eventName: T;
  handler: (event: WindowEventMap[T]) => void;
};

type UseEventListeners<T extends keyof WindowEventMap> = {
  eventListeners: EventListener<T>[];
};

export const useEventListeners = <T extends keyof WindowEventMap>({
  eventListeners,
}: UseEventListeners<T>) => {
  useEffect(() => {
    eventListeners.forEach(({ eventName, handler }) => {
      window.addEventListener(eventName, handler);
    });

    return () => {
      eventListeners.forEach(({ eventName, handler }) => {
        window.removeEventListener(eventName, handler);
      });
    };
  }, [eventListeners]);
};
