import { Box } from "@chakra-ui/react";
import { useAuth } from "@clerk/clerk-react";

export default function HomePage() {
  const { userId, isSignedIn, isLoaded } = useAuth();

  return (
    <>{isSignedIn ? <Box>Yo ur signed in</Box> : <Box>Ur not signed in</Box>}</>
  );
}
