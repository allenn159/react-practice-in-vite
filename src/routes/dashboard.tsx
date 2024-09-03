import { Box } from "@chakra-ui/react";
import { ProductsTable } from "~/components/dashboard";
import { ProductsDashboardProvider } from "~/components/dashboard";

export default function Dashboard() {
  return (
    <Box
      backgroundColor="white"
      overflowX="auto"
      borderRadius="4px"
      mt="12"
      height="900px"
    >
      <ProductsDashboardProvider>
        <ProductsTable overflowY="auto" />
      </ProductsDashboardProvider>
    </Box>
  );
}
