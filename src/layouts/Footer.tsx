import { Box, Flex, Text } from "@chakra-ui/react";

export function Footer() {
  return (
    <Box
      p="12"
      backgroundColor="gray.700"
      width="100%"
      as="footer"
      position="absolute"
      bottom={0}
      left={0}
    >
      <Flex justifyContent="center">
        <Text color="white">© 2024 FlipprApp. All rights reserved.</Text>
      </Flex>
    </Box>
  );
}
