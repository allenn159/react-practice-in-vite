import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useFetch } from "~/components/custom_hooks";
import { useToast } from "@chakra-ui/react";

export type EditProductParams = {
  productId: number;
  product: {
    name: string;
    purchase_price: number;
    fees?: number;
    sold_price?: number;
    sold_at?: number;
  };
};

export function useAddProduct() {
  const queryClient = useQueryClient();
  const fetchWrapper = useFetch();
  const toast = useToast();
  const addProduct = useMutation({
    mutationFn: (productParams: EditProductParams) => {
      return fetchWrapper("PUT", `api/products/${productParams.productId}`, {
        body: JSON.stringify([productParams.product]),
      });
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["products"],
      });

      toast({
        title: "Product successfully edited.",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    },
  });

  return addProduct;
}
