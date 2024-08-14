import { SignIn } from "@clerk/clerk-react";
import { Flex } from "@chakra-ui/react";

export default function SignInPage() {
  return (
    <Flex justifyContent="center" alignItems="center">
      <SignIn
        appearance={{
          elements: {
            card: {
              height: "200px",
            },
            footer: {
              display: "none",
            },
          },
        }}
        path="/sign-in"
      />
    </Flex>
  );
}
