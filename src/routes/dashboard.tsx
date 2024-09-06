import { Box } from "@chakra-ui/react";
import {
  ProductsTable,
  ProductsDashboardProvider,
  ProductsDashboardControls,
} from "~/components/dashboard";

export default function Dashboard() {
  return (
    <Box borderRadius="4px" mt="10">
      <ProductsDashboardProvider>
        <ProductsDashboardControls mb="4">
          <Box maxHeight="800px" overflowY="auto">
            <ProductsTable minHeight="800px" />
          </Box>
        </ProductsDashboardControls>
      </ProductsDashboardProvider>
    </Box>
  );
}
