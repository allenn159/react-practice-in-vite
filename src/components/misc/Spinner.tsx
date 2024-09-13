import { Flex, Spinner, ChakraProps } from "@chakra-ui/react";

type CustomSpinnerProps = {
  color?: string;
};

export function CustomSpinner({
  color = "blue.500",
  ...props
}: CustomSpinnerProps & ChakraProps) {
  return (
    <Flex justifyContent="center" alignItems="center" {...props}>
      <Spinner color={color} size="lg" />
    </Flex>
  );
}
