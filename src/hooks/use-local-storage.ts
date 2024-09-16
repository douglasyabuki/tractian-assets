import { safeStringify } from "@/utils/util-object";
import { useEffect, useState } from "react";

const isLocalStorageAvailable = () => {
  try {
    const testKey = "__storage_test__";
    localStorage.setItem(testKey, testKey);
    localStorage.removeItem(testKey);
    return true;
  } catch (err) {
    console.error("Local storage unavailable", err);
    return false;
  }
};

export const useLocalStorage = (key: string, initialValue: any) => {
  const [storedValue, setStoredValue] = useState(() => {
    if (!isLocalStorageAvailable) {
      console.warn("Local storage not available");
      return initialValue;
    }
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (err) {
      console.error(`Failed to read localStorage key "${key}":`, err);
      return initialValue;
    }
  });

  useEffect(() => {
    if (isLocalStorageAvailable()) {
      try {
        const item = localStorage.getItem(key);
        setStoredValue(item ? JSON.parse(item) : initialValue);
      } catch (err) {
        console.error(`Failed to read localStorage key "${key}":`, err);
      }
    }
  }, [key, initialValue]);

  const setValue = (value = {}) => {
    if (!isLocalStorageAvailable) {
      console.warn("Local storage not available");
      return initialValue;
    }
    try {
      const valueToStore = value;
      setStoredValue(valueToStore);
      localStorage.setItem(key, safeStringify(valueToStore));
    } catch (err) {
      console.error(`Failed to set localStorage key "${key}":`, err);
    }
  };

  const removeValue = () => {
    if (!isLocalStorageAvailable) {
      console.warn("Local storage not available");
      return;
    }
    try {
      localStorage.removeItem(key);
      setStoredValue(initialValue);
    } catch (err) {
      console.error(`Failed to remove localStorage key "${key}":`, err);
    }
  };

  return { storedValue, setValue, removeValue };
};
