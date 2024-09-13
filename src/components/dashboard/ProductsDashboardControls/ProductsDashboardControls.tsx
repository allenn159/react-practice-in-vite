import { ReactNode } from "react";
import { Flex } from "@chakra-ui/react";
import { SortSelect } from "./SortSelect";
import { SearchBar } from "./SearchBar";
import { NextPrevButtons } from "./NextPrevButtons";
import { AddProductControls } from "./AddProductControls";
import { CustomSpinner } from "~/components/misc";
import { useProductDashboardContext } from "~/components/dashboard";
import { DeleteProductsControl } from "./DeleteProductsControl";

type ProductDashboardControls = {
  children: ReactNode;
};

export function ProductsDashboardControls({
  children,
}: ProductDashboardControls) {
  const { isFetching } = useProductDashboardContext();
  return (
    <>
      <Flex
        justifyContent="flex-end"
        alignItems="center"
        mb="4"
        minHeight="32px"
      >
        {isFetching && <CustomSpinner color="white" />}
      </Flex>
      <Flex justifyContent="space-between" alignItems="center" mb="4">
        <Flex gap="4">
          <AddProductControls />
          <DeleteProductsControl />
        </Flex>
        <Flex gap="3">
          <SearchBar />
          <SortSelect />
        </Flex>
      </Flex>
      {children}
      <NextPrevButtons mt="4" />
    </>
  );
}
