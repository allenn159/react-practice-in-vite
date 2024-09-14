import { useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Checkbox,
  ChakraProps,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useProductDashboardContext } from "./ProductsDashboardContext";
import { formatUnixTimestamp } from "../utils";
import { ProfitCell } from "./ProfitCell";
import type { Product } from "~/types";
import { EditProductControls } from "./ProductsDashboardControls/EditProductControls";

export function ProductsTable({ ...props }: ChakraProps) {
  const { products, selectionOptions } = useProductDashboardContext();
  const { isSelected, toggle, toggleAll, allSelected } = selectionOptions;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const onHandleRowClick = (product: Product) => {
    setSelectedProduct(product);
    onOpen();
  };

  return (
    <>
      <EditProductControls
        isOpen={isOpen}
        onClose={onClose}
        product={selectedProduct}
      />
      <Table
        variant="simple"
        colorScheme="gray"
        backgroundColor="white"
        {...props}
      >
        <Thead position="sticky" top={0} bg="gray.200" zIndex={1}>
          <Tr>
            <Th>
              <Checkbox
                isChecked={products && products.length > 0 && allSelected}
                colorScheme="blue"
                borderColor="blue.400"
                _hover={{ borderColor: "blue.500" }}
                _focus={{ boxShadow: "0 0 0 3px rgba(66, 153, 225, 0.6)" }}
                onChange={toggleAll}
              />
            </Th>
            <Th>Name</Th>
            <Th>Purchase Price</Th>
            <Th>Sold Price</Th>
            <Th>Fees</Th>
            <Th>Profit</Th>
            <Th>Sold Date</Th>
            <Th>Date</Th>
          </Tr>
        </Thead>
        <Tbody>
          {products?.map((product) => (
            <Tr _hover={{ bg: "blue.200" }} cursor="pointer" key={product.id}>
              <Td>
                <Checkbox
                  isChecked={isSelected(product.id)}
                  colorScheme="blue"
                  borderColor="blue.400"
                  _hover={{ borderColor: "blue.500" }}
                  _focus={{ boxShadow: "0 0 0 3px rgba(66, 153, 225, 0.6)" }}
                  onChange={() => toggle(product.id)}
                />
              </Td>
              <Td onClick={() => onHandleRowClick(product)}>
                <Text color="black">{product.name}</Text>
              </Td>
              <Td onClick={() => onHandleRowClick(product)}>
                <Text color="black">${product.purchase_price}</Text>
              </Td>

              <Td onClick={() => onHandleRowClick(product)}>
                {product.sold_price && (
                  <Text color="black">${product.sold_price}</Text>
                )}
              </Td>
              <Td onClick={() => onHandleRowClick(product)}>
                {product.fees && <Text color="black">${product.fees}</Text>}
              </Td>
              <Td onClick={() => onHandleRowClick(product)}>
                <ProfitCell product={product} />
              </Td>
              <Td onClick={() => onHandleRowClick(product)}>
                <Text color="black">
                  {product.sold_at &&
                    formatUnixTimestamp(product.sold_at, "MMMM d, yyyy")}
                </Text>
              </Td>
              <Td onClick={() => onHandleRowClick(product)}>
                <Text color="black">
                  {formatUnixTimestamp(product.created_at, "MMMM d, yyyy")}
                </Text>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </>
  );
}
