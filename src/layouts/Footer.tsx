import { Box, Flex, Text } from "@chakra-ui/react";

export function Footer() {
  return (
    <footer>
      <Box
        p="12"
        backgroundColor="gray.700"
        position="absolute"
        bottom="0"
        width="100%"
      >
        <Flex justifyContent="center">
          <Text color="white">© 2024 FlipprApp. All rights reserved.</Text>
        </Flex>
      </Box>
    </footer>
  );
}
