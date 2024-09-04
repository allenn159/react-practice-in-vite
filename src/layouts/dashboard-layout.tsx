import * as React from "react";
import { useAuth } from "@clerk/clerk-react";
import { Outlet, useNavigate } from "react-router-dom";
import { CustomSpinner } from "~/components/misc";

export default function DashboardLayout() {
  const { userId, isLoaded } = useAuth();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (isLoaded && !userId) {
      navigate("/sign-in");
    }
  }, [isLoaded]);

  if (!isLoaded) {
    return <CustomSpinner mt="48" />;
  }

  return <Outlet />;
}
