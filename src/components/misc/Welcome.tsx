// src/pages/NotFound.jsx
import { Box, Heading, Text } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";

const Welcome = () => {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading
        display="inline-block"
        as="h2"
        size="2xl"
        bgColor="blue.500"
        backgroundClip="text"
        mb="8"
      >
        Welcome!
      </Heading>
      <Link href="/dashboard" _hover={{ textDecoration: "none" }}>
        <Text color="white" _hover={{ color: "gray.300" }} mb={6}>
          Click here to get to the dashboard 😊
        </Text>
      </Link>
    </Box>
  );
};

export default Welcome;
