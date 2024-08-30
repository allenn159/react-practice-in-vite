import { Flex, Spinner } from "@chakra-ui/react";
import { useAuth } from "@clerk/clerk-react";
import { Welcome } from "~/components/misc";

export default function HomePage() {
  const { isSignedIn, isLoaded } = useAuth();

  return (
    <>
      {!isLoaded ? (
        <Flex justifyContent="center" alignItems="center" mt="24">
          <Spinner color="blue.500" size="lg" />
        </Flex>
      ) : isSignedIn ? (
        <Welcome />
      ) : (
        <Flex>This will be the landing page</Flex>
      )}
    </>
  );
}
