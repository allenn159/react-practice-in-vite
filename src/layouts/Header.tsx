import { Link } from "react-router-dom";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { Flex, Heading, Box, Link as ChakraLink } from "@chakra-ui/react";

export function Header() {
  return (
    <header className="header">
      <Flex p="3" alignItems="center" justifyContent="space-between" mb="4">
        <Box>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Heading size="2xl" color="black">
              Flipper
            </Heading>
          </Link>
        </Box>
        <Flex>
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  card: {
                    height: "200px",
                  },
                  userButtonPopoverFooter: {
                    display: "none",
                  },
                  avatarBox: { height: " 35px", width: "35px" },
                },
              }}
            ></UserButton>
          </SignedIn>
          <SignedOut>
            <ChakraLink
              as={Link}
              to="/sign-in"
              color="blue.500"
              fontSize="lg"
              textDecoration="none"
              _hover={{ color: "blue.600", textDecoration: "none" }}
            >
              Sign In
            </ChakraLink>
          </SignedOut>
        </Flex>
      </Flex>
    </header>
  );
}
