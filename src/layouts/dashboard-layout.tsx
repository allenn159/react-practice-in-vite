import * as React from "react";
import { useAuth } from "@clerk/clerk-react";
import { Outlet, useNavigate } from "react-router-dom";
import { Flex, Spinner } from "@chakra-ui/react";

export default function DashboardLayout() {
  const { userId, isLoaded } = useAuth();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (isLoaded && !userId) {
      navigate("/sign-in");
    }
  }, [isLoaded]);

  if (!isLoaded) {
    return (
      <Flex justifyContent="center" alignItems="center" mt="24">
        <Spinner color="blue.500" size="lg" />
      </Flex>
    );
  }

  return <Outlet />;
}
