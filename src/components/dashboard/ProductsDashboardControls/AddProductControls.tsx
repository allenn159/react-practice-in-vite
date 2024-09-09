import { Button, useDisclosure } from "@chakra-ui/react";
import { useProductDashboardContext } from "../ProductsDashboardContext";
import { ProductControls } from "./ProductControls";
import type { FormData } from "./ProductControls";

export function AddProductControls() {
  const { addProduct } = useProductDashboardContext();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const onSubmit = (data: FormData, reset?: () => void) => {
    addProduct.mutate(
      {
        ...data,
        purchase_price: Number(data.purchase_price),
        fees: data.fees ? Number(data.fees) : undefined,
        sold_price: data.sold_price ? Number(data.sold_price) : undefined,
        sold_at: data.sold_at ? data.sold_at?.getTime() / 1000 : undefined,
      },
      {
        onSuccess: () => {
          if (reset) {
            reset();
          }
        },
      }
    );
  };

  return (
    <>
      <Button onClick={onOpen}>Add Product</Button>
      <ProductControls
        isOpen={isOpen}
        onClose={onClose}
        product={null}
        onSubmit={onSubmit}
      />
    </>
  );
}
