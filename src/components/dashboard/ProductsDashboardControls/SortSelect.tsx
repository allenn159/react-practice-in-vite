import { Select } from "@chakra-ui/react";
import { useProductDashboardContext } from "../ProductsDashboardContext";

export function SortSelect() {
  const { sortByName, sortByCreatedAt } = useProductDashboardContext();

  const onHandleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;

    switch (value) {
      case "A":
        sortByCreatedAt("DESC");
        break;
      case "B":
        sortByCreatedAt("ASC");
        break;
      case "C":
        sortByName("ASC");
        break;
      case "D":
        sortByName("DESC");
        break;
      default:
        break;
    }
  };

  return (
    <Select
      sx={{
        option: {
          backgroundColor: "gray.700",
          color: "white",
        },
      }}
      onChange={onHandleChange}
    >
      <option value="A">Newest</option>
      <option value="B">Oldest</option>
      <option value="C">Product Name A-Z</option>
      <option value="D">Product Name Z-A</option>
    </Select>
  );
}
