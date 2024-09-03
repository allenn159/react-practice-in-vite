import { Flex } from "@chakra-ui/react";
import { useAuth } from "@clerk/clerk-react";
import { Welcome } from "~/components/misc";
import { CustomSpinner } from "~/components/misc";

export default function HomePage() {
  const { isSignedIn, isLoaded } = useAuth();

  return (
    <>
      {!isLoaded ? (
        <CustomSpinner mt="24" />
      ) : isSignedIn ? (
        <Welcome />
      ) : (
        <Flex>This will be the landing page</Flex>
      )}
    </>
  );
}
