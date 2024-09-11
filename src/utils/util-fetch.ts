export const formatParams = <TParams extends Record<string, unknown>>(
  params?: TParams,
): string => {
  if (!params) return "";

  return new URLSearchParams(
    Object.entries(params).reduce<Record<string, string>>(
      (acc, [key, value]) => {
        if (typeof value === "string") {
          acc[key] = value; // Only include string values
        } else if (value !== undefined && value !== null) {
          acc[key] = String(value); // Convert non-string values to strings
        }
        return acc;
      },
      {},
    ),
  ).toString();
};
