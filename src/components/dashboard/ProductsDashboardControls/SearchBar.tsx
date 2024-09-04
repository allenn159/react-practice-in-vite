import { Input } from "@chakra-ui/react";
import { useProductDashboardContext } from "../ProductsDashboardContext";

export function SearchBar() {
  const { searchTerm, setSearchTerm } = useProductDashboardContext();

  return (
    <Input
      placeholder="Search product(s)..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      _placeholder={{ color: "white" }}
    />
  );
}
