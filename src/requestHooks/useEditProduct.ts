import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useFetch } from "~/components/custom_hooks";
import { useToast } from "@chakra-ui/react";

export type EditProductParams = {
  product: {
    name: string;
    purchase_price: number;
    fees?: number;
    sold_price?: number;
    sold_at?: number;
  };
  productId?: number;
};

export function useEditProduct() {
  const queryClient = useQueryClient();
  const fetchWrapper = useFetch();
  const toast = useToast();
  const editProduct = useMutation({
    mutationFn: (params: EditProductParams) => {
      return fetchWrapper("PUT", `api/products/${params.productId}`, {
        body: JSON.stringify(params.product),
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
    onError: () => {
      toast({
        title: "There was a problem processing your request.",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    },
  });

  return editProduct;
}
