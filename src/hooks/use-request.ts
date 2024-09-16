import { useCallback, useEffect, useRef, useState } from "react";

interface RequestOptions<TBody, TParams, TData, TError> {
  method: "GET" | "POST" | "PUT" | "DELETE";
  body?: TBody;
  params?: TParams;
  headers?: Record<string, string>;
  onSuccess?: (data: TData) => void;
  onError?: (error: TError) => void;
}

interface UseRequestReturn<TData, TError, TBody, TParams> {
  data: TData | null;
  error: TError | null;
  loading: boolean;
  sendRequest: (
    url: string,
    options?: RequestOptions<TBody, TParams, TData, TError>,
  ) => void;
  abortRequest: () => void;
}

export const useRequest = <
  TData = unknown,
  TError = unknown,
  TBody = unknown,
  TParams = Record<string, string>,
>(): UseRequestReturn<TData, TError, TBody, TParams> => {
  const [data, setData] = useState<TData | null>(null);
  const [error, setError] = useState<TError | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const abortControllerRef = useRef<AbortController | null>(null);

  const sendRequest = useCallback(
    (url: string, options?: RequestOptions<TBody, TParams, TData, TError>) => {
      setData(null);
      setError(null);
      setLoading(true);
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
      const abortController = new AbortController();
      abortControllerRef.current = abortController;

      const fetchOptions: RequestInit = {
        method: options?.method || "GET",
        headers: {
          "Content-Type": "application/json",
          ...(options?.headers || {}),
        },
        signal: abortController.signal,
      };
      if (options?.body) {
        fetchOptions.body = JSON.stringify(options.body);
      }
      fetch(
        url +
          "?" +
          new URLSearchParams(options?.params ? options.params : {}).toString(),
        fetchOptions,
      )
        .then((response) => {
          if (!response.ok) {
            return response.json().then((errorData) => {
              throw errorData;
            });
          }
          return response.json();
        })
        .then((responseData: TData) => {
          setData(responseData);
          options?.onSuccess?.(responseData);
        })
        .catch((err: TError) => {
          if (abortController.signal.aborted) {
            console.log("Request aborted");
          } else {
            setError(err);
            options?.onError?.(err);
          }
        })
        .finally(() => {
          setLoading(false);
        });
    },
    [],
  );

  const abortRequest = useCallback(() => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
  }, []);

  useEffect(() => {
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, []);

  return { data, error, loading, sendRequest, abortRequest };
};
