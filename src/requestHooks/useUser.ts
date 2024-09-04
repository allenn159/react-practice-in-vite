import { useQuery } from "@tanstack/react-query";
import { useFetch } from "~/components/custom_hooks";
import type { User } from "~/types";

export function useUser() {
  const fetchWrapper = useFetch();

  return useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      return await fetchWrapper<User>("GET", "http://localhost:3000/api/user");
    },
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });
}
