import { useEffect, useRef } from "react";

export const useTimeout = (callback: VoidFunction, delay: number | null) => {
  const callbackRef = useRef<VoidFunction>();

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay === null) {
      return;
    }

    const id = setTimeout(() => {
      if (callbackRef.current) {
        callbackRef.current();
      }
    }, delay);

    return () => clearTimeout(id);
  }, [delay]);
};
