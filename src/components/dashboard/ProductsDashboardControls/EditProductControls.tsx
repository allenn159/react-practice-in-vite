import { useProductDashboardContext } from "../ProductsDashboardContext";
import { ProductControls } from "./ProductControls";
import type { FormData } from "./ProductControls";
import type { ProductControlsProps } from "./ProductControls";

export function EditProductControls({
  isOpen,
  onClose,
  product,
}: Omit<ProductControlsProps, "onSubmit">) {
  const { editProduct } = useProductDashboardContext();

  const onSubmit = (data: FormData) => {
    editProduct.mutate({
      product: {
        ...data,
        purchase_price: Number(data.purchase_price),
        fees: data.fees ? Number(data.fees) : undefined,
        sold_price: data.sold_price ? Number(data.sold_price) : undefined,
        sold_at: data.sold_at ? data.sold_at?.getTime() / 1000 : undefined,
      },
      productId: product?.id,
    });
  };

  return (
    <>
      <ProductControls
        isOpen={isOpen}
        onClose={onClose}
        product={product}
        onSubmit={onSubmit}
        isPending={editProduct.isPending}
      />
    </>
  );
}
