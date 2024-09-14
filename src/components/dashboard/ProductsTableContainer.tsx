import { Box, Flex, Text } from "@chakra-ui/react";
import { ProductsTable } from "~/components/dashboard";
import { useProductDashboardContext } from "~/components/dashboard";

export function ProductsTableContainer() {
  const { products, isLoading } = useProductDashboardContext();
  return (
    <Box
      height="750px"
      overflowY="auto"
      overflowX="auto"
      backgroundColor="white"
    >
      <ProductsTable />
      {!isLoading && products?.length === 0 && (
        <Flex mt="24" justifyContent="center" alignItems="center">
          <Text color="black">No additional products were found 😲</Text>
        </Flex>
      )}
    </Box>
  );
}
