import { formatParams } from "@/utils/util-fetch";
import { useEffect, useRef, useState } from "react";

export const useRequest = <
  TParams extends Record<string, unknown> = Record<string, unknown>,
  TBody = unknown,
  TData = unknown,
  TError = unknown,
>(
  method: "GET" | "POST" | "PUT" | "DELETE",
  path: string,
  options?: {
    onSuccess?: (data: TData) => void;
    onError?: (error: TError) => void;
    plainText?: boolean;
  },
) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<TData | null>(null);
  const [error, setError] = useState<TError | null>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    return () => {
      abortControllerRef?.current?.abort();
    };
  }, []);

  const makeRequest = (
    body?: TBody,
    params?: TParams,
    onSuccess?: (res: TData) => void,
    onError?: (err: TError) => void,
  ) => {
    setLoading(true);
    setData(null);
    setError(null);
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    const abortController = new AbortController();
    abortControllerRef.current = abortController;
    const formattedParams = formatParams(params);

    fetch(path + (formattedParams ? `?${formattedParams}` : ""), {
      body: Object.keys(body || {}).length ? JSON.stringify(body) : undefined,
      headers: { "Content-Type": "application/json" },
      cache: "no-cache",
      method,
    })
      .then((res) => (options?.plainText ? res.text() : res.json()))
      .then((data: TData) => {
        setData(data);
        options?.onSuccess?.(data);
        onSuccess?.(data);
      })
      .catch((err: TError) => {
        if (abortController.signal.aborted) {
          console.log("request aborted");
          return;
        }
        setData(null);
        setError(err);
        options?.onError?.(err);
        onError?.(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const sendRequest = ({
    body,
    params,
    onSuccess,
    onError,
  }: {
    body?: TBody;
    params?: TParams;
    onSuccess?: (res: TData) => void;
    onError?: (err: TError) => void;
  } = {}) => makeRequest(body, params, onSuccess, onError);

  return {
    data,
    loading,
    sendRequest,
    error,
  };
};
