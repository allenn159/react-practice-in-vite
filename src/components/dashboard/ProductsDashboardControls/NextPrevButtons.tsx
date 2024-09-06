import { Flex, ChakraProps, Button } from "@chakra-ui/react";
import {
  useProductDashboardContext,
  DEFAULT_OFFSET,
  DEFAULT_LIMIT,
} from "../ProductsDashboardContext";

export function NextPrevButtons({ ...props }: ChakraProps) {
  const { offset, products, next, previous, isLoading } =
    useProductDashboardContext();

  const productCount = products?.length;

  return (
    <Flex gap={2} justifyContent="flex-end" {...props}>
      <Button
        onClick={previous}
        isDisabled={offset === DEFAULT_OFFSET}
        width="100px"
      >
        Previous
      </Button>
      <Button
        onClick={next}
        isDisabled={
          isLoading || (productCount ? productCount < DEFAULT_LIMIT : false)
        }
        width="100px"
      >
        Next
      </Button>
    </Flex>
  );
}
