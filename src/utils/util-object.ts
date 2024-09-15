export const safeStringify = (value: object | null): string => {
  const seen = new WeakSet();
  return JSON.stringify(value, (key, val) => {
    if (typeof val === "object" && val !== null) {
      if (seen.has(val)) {
        return;
      }
      seen.add(val);
    }
    return val;
  });
};
