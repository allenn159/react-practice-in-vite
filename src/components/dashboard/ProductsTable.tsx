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
  Tag,
  Flex,
} from "@chakra-ui/react";
import { useProductDashboardContext } from "./ProductsDashboardContext";
import { formatUnixTimestamp } from "../utils";
import { ProfitCell } from "./ProfitCell";

export function ProductsTable({ ...props }: ChakraProps) {
  const { products } = useProductDashboardContext();

  return (
    <Table
      variant="striped"
      colorScheme="gray"
      backgroundColor="white"
      {...props}
    >
      <Thead position="sticky" top={0} bg="gray.200" zIndex={1}>
        <Tr>
          <Th>
            <Checkbox
              isChecked={false}
              colorScheme="blue"
              borderColor="blue.400"
              _hover={{ borderColor: "blue.500" }}
              _focus={{ boxShadow: "0 0 0 3px rgba(66, 153, 225, 0.6)" }} // Focus outline
            />
          </Th>
          <Th>Name</Th>
          <Th>Purchase Price</Th>
          <Th>Fees</Th>
          <Th>Sold Price</Th>
          <Th>Profit</Th>
          <Th>Tags</Th>
          <Th>Date</Th>
          <Th>Sold Date</Th>
        </Tr>
      </Thead>
      <Tbody>
        {products?.map((product) => (
          <Tr key={product.id}>
            <Td>
              <Checkbox
                isChecked={false}
                colorScheme="blue"
                borderColor="blue.400"
                _hover={{ borderColor: "blue.500" }}
                _focus={{ boxShadow: "0 0 0 3px rgba(66, 153, 225, 0.6)" }}
              />
            </Td>
            <Td>
              <Text color="black">{product.name}</Text>
            </Td>
            <Td>
              <Text color="black">${product.purchase_price}</Text>
            </Td>
            <Td>
              {product.fees && <Text color="black">${product.fees}</Text>}
            </Td>
            <Td>
              {product.sold_price && (
                <Text color="black">${product.sold_price}</Text>
              )}
            </Td>
            <ProfitCell product={product} />
            <Td>
              <Flex gap="2">
                {product.tags?.map((tag) => (
                  <Tag key={tag.id} bg={tag.color} color={tag.text_color}>
                    {tag.name}
                  </Tag>
                ))}
              </Flex>
            </Td>
            <Td>
              <Text color="black">
                {formatUnixTimestamp(product.created_at, "MMMM d, yyyy")}
              </Text>
            </Td>
            <Td>
              <Text color="black">
                {product.sold_at &&
                  formatUnixTimestamp(product.sold_at, "MMMM d, yyyy")}
              </Text>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
}
