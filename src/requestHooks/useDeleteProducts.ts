import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useFetch } from "~/components/custom_hooks";
import { useToast } from "@chakra-ui/react";

export function useDeleteProducts() {
  const queryClient = useQueryClient();
  const fetchWrapper = useFetch();
  const toast = useToast();

  const addProduct = useMutation({
    mutationFn: (productIds: number[]) => {
      return fetchWrapper("DELETE", "api/products", {
        body: JSON.stringify({ productIds: productIds }),
      });
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["products"],
      });

      toast({
        title: "Product(s) successfully deleted.",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    },
  });

  return addProduct;
}
