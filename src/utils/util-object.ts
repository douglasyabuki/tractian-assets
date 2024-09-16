export const safeStringify = (value: Record<string, unknown>): string => {
  const seen = new WeakSet();
  return JSON.stringify(value, (_key, val) => {
    if (typeof val === "object" && val !== null) {
      if (seen.has(val)) {
        return;
      }
      seen.add(val);
    }
    return val;
  });
};
