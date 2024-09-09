import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useFetch } from "~/components/custom_hooks";
import { useToast } from "@chakra-ui/react";

export type AddProductParams = {
  name: string;
  purchase_price: number;
  fees?: number;
  sold_price?: number;
  sold_at?: number;
};

export function useAddProduct() {
  const queryClient = useQueryClient();
  const fetchWrapper = useFetch();
  const toast = useToast();
  const addProduct = useMutation({
    mutationFn: (newProduct: AddProductParams) => {
      return fetchWrapper("POST", "api/products", {
        body: JSON.stringify([newProduct]),
      });
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["products"],
      });

      toast({
        title: "Product successfully added.",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    },
  });

  return addProduct;
}
