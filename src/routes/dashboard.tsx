import { Box } from "@chakra-ui/react";
import {
  ProductsDashboardProvider,
  ProductsDashboardControls,
  ProductsTableContainer,
} from "~/components/dashboard";

export default function Dashboard() {
  return (
    <Box borderRadius="4px" mt="10">
      <ProductsDashboardProvider>
        <ProductsDashboardControls>
          <ProductsTableContainer />
        </ProductsDashboardControls>
      </ProductsDashboardProvider>
    </Box>
  );
}
