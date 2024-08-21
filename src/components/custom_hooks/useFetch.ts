import { useAuth } from "@clerk/clerk-react";

interface FetchOptions extends RequestInit {
  headers?: Record<string, string>;
}

const useFetch = () => {
  const { getToken } = useAuth();

  const fetchWrapper = async <T>(
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

    console.log(headers);

    const response = await fetch(url, { headers: { ...headers } });
    const data: T = await response.json();

    return data;
  };

  return fetchWrapper;
};

export default useFetch;
