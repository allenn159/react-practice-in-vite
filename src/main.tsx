import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import RootLayout from "./layouts/root-layout";
import DashboardLayout from "./layouts/dashboard-layout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomePage, SignInPage, Dashboard } from "./routes";
import { NotFound } from "./components/misc";
import theme from "./theme";
import "@fontsource/inter/400.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/sign-in/*", element: <SignInPage /> },
      { path: "*", element: <NotFound /> },

      {
        element: <DashboardLayout />,
        path: "dashboard",
        children: [{ path: "/dashboard", element: <Dashboard /> }],
      },
    ],
  },
]);

const queryClient = new QueryClient();

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <RouterProvider router={router} />
      </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
