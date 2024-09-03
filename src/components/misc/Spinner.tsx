import { Flex, Spinner, ChakraProps } from "@chakra-ui/react";

export function CustomSpinner(props: ChakraProps) {
  return (
    <Flex justifyContent="center" alignItems="center" {...props}>
      <Spinner color="blue.500" size="lg" />
    </Flex>
  );
}
