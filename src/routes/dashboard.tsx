import { Box } from "@chakra-ui/react";
import {
  ProductsTable,
  ProductsDashboardProvider,
  ProductsDashboardControls,
} from "~/components/dashboard";

export default function Dashboard() {
  return (
    <Box overflowX="auto" overflowY="hidden" borderRadius="4px" mt="10">
      <ProductsDashboardProvider>
        <ProductsDashboardControls mb="4">
          <Box height="800px" overflowY="auto">
            <ProductsTable />
          </Box>
        </ProductsDashboardControls>
      </ProductsDashboardProvider>
    </Box>
  );
}
