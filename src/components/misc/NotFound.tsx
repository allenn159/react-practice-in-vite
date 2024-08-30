// src/pages/NotFound.jsx
import { Box, Heading, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "@chakra-ui/react";

const NotFound = () => (
  <Box textAlign="center" py={10} px={6}>
    <Heading
      display="inline-block"
      as="h2"
      size="2xl"
      bgColor="blue.500"
      backgroundClip="text"
    >
      404
    </Heading>
    <Text fontSize="18px" mt={3} mb={2}>
      Page Not Found
    </Text>
    <Text color="white" mb={6}>
      The page you're looking for does not seem to exist.
    </Text>

    <Link as={RouterLink} to="/" color="blue.500" fontWeight="bold">
      Go to Home
    </Link>
  </Box>
);

export default NotFound;
