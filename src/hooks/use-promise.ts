import { useCallback, useState } from "react";

interface UsePromiseReturn<TData, TError, TParams> {
  data: TData | null;
  loading: boolean;
  error: TError | null;
  run: (options?: {
    params?: TParams;
    onSuccess?: (result: TData) => void;
    onError?: (err: TError) => void;
  }) => Promise<TData | void>;
}

export const usePromise = <TData = unknown, TError = unknown, TParams = void | Record<string, unknown>>(
  asyncFunction: (params?: TParams) => Promise<TData>
): UsePromiseReturn<TData, TError, TParams> => {
  const [data, setData] = useState<TData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<TError | null>(null);

  const run = useCallback(
    async (options?: {
      params?: TParams;
      onSuccess?: (result: TData) => void;
      onError?: (err: TError) => void;
    }): Promise<TData | void> => {
      setLoading(true);
      setError(null);
      setData(null);
      try {
        const result = await asyncFunction(options?.params);
        setData(result);

        if (options?.onSuccess) {
          options.onSuccess(result);
        }

        return result;
      } catch (err) {
        setError(err as TError);

        if (options?.onError) {
          options.onError(err as TError);
        }
      } finally {
        setLoading(false);
      }
    },
    [asyncFunction]
  );

  return {
    data,
    loading,
    error,
    run,
  };
};
