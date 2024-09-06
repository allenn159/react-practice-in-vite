import { ReactNode } from "react";
import { Flex, ChakraProps } from "@chakra-ui/react";
import { SortSelect } from "./SortSelect";
import { SearchBar } from "./SearchBar";
import { NextPrevButtons } from "./NextPrevButtons";

type ProductDashboardControls = {
  children: ReactNode;
};

export function ProductsDashboardControls({
  children,
  ...props
}: ProductDashboardControls & ChakraProps) {
  return (
    <>
      <Flex justifyContent="space-between" alignItems="center" {...props}>
        <Flex>Hi</Flex>
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
