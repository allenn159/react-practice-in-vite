import { useAuth } from "@clerk/clerk-react";

interface FetchOptions extends RequestInit {
  headers?: Record<string, string>;
}

type RequestMethods = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

const useFetch = () => {
  const { getToken } = useAuth();

  const fetchWrapper = async <T>(
    requestMethod: RequestMethods,
    url: string,
    options: FetchOptions = {}
  ): Promise<T> => {
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
      ...options.headers,
    };

    const token = await getToken();

    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    const response = await fetch(url, {
      method: requestMethod,
      headers: { ...headers },
      ...options,
    });
    const data: T = await response.json();

    return data;
  };

  return fetchWrapper;
};

export default useFetch;
