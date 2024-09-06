import { Outlet, useNavigate } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Box } from "@chakra-ui/react";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

export default function RootLayout() {
  const navigate = useNavigate();

  return (
    <Box
      backgroundColor="gray.700"
      textColor="white"
      minHeight="100vh"
      position="relative"
    >
      <ClerkProvider
        routerPush={(to) => navigate(to)}
        routerReplace={(to) => navigate(to, { replace: true })}
        publishableKey={PUBLISHABLE_KEY}
      >
        <Header />
        <Box paddingBottom="200px" as="main" mx="5%">
          <Outlet />
        </Box>
        <Footer />
      </ClerkProvider>
    </Box>
  );
}
