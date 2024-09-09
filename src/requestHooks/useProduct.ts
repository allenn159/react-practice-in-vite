import { useQuery } from "@tanstack/react-query";
import { useFetch } from "~/components/custom_hooks";
import type { Product } from "~/types";

export function useProduct(productId: number) {
  const fetchWrapper = useFetch();

  return useQuery({
    queryKey: ["product", productId],
    queryFn: async () => {
      return await fetchWrapper<Product>("GET", `api/products/${productId}`);
    },
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });
}
