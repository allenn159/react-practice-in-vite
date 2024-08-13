import { Link } from "react-router-dom";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { Flex, Heading, Box } from "@chakra-ui/react";

export function Header() {
  return (
    <header className="header">
      <Flex
        p="3"
        alignItems="center"
        justifyContent="space-between"
        borderBottom="2px"
        borderBottomColor="gray.500"
      >
        <Box>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Heading size="2xl" color="black">
              Flipper
            </Heading>
          </Link>
        </Box>
        <Flex>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <Link to="/sign-in">Sign In</Link>
          </SignedOut>
        </Flex>
      </Flex>
    </header>
  );
}
