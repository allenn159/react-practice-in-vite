import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useFetch } from "~/components/custom_hooks";
import type { Product, GetProductsQueryParams } from "~/types";

export function useProducts(queryParams?: GetProductsQueryParams) {
  const fetchWrapper = useFetch();

  return useQuery({
    queryKey: ["products", queryParams],
    queryFn: async () => {
      return await fetchWrapper<Product[]>(
        "POST",
        "http://localhost:3000/api/products/view",
        { body: JSON.stringify(queryParams) }
      );
    },
    placeholderData: keepPreviousData,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });
}
