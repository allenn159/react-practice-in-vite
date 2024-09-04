import { useState, useContext, createContext, ReactNode } from "react";
import { useDebounce } from "@uidotdev/usehooks";
import { useProducts } from "~/requestHooks";
import { useGetCurrentTime } from "../custom_hooks";
import type { Product } from "~/types";

const DEFAULT_LIMIT = 50;
const DEFAULT_OFFSET = 0;

type SortOptions = "ASC" | "DESC";

export type ProductsDashboardContext = {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  debouncedSearchTerm: string;
  limit: number;
  setLimit: (value: number) => void;
  offset: number;
  setOffset: (value: number) => void;
  dateRange: {
    from: number;
    to: number;
  };
  updateFrom: (value: number) => void;
  updateTo: (value: number) => void;
  sort?: {
    name?: SortOptions;
    created_at?: SortOptions;
  };
  sortByName: (order: SortOptions) => void;
  sortByCreatedAt: (order: SortOptions) => void;
  isLoading: boolean;
  products: Product[] | undefined;
  error: Error | null;
};

export const ProductsDashboardContext = createContext<ProductsDashboardContext>(
  {} as ProductsDashboardContext
);

export function ProductsDashboardProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const [limit, setLimit] = useState(DEFAULT_LIMIT);
  const [offset, setOffset] = useState(DEFAULT_OFFSET);
  const currentTime = useGetCurrentTime();
  const [dateRange, setDateRange] = useState({ from: 0, to: currentTime });
  const [sort, setSort] = useState<
    undefined | ProductsDashboardContext["sort"]
  >({ name: undefined, created_at: "DESC" });
  const {
    data: products,
    isLoading,
    error,
  } = useProducts({
    limit: limit,
    offset: offset,
    searchTerm: debouncedSearchTerm,
    dateRange: dateRange,
    sort: sort,
  });

  const updateFrom = (from: number) => {
    setDateRange((prevRange) => ({
      ...prevRange,
      from: from,
    }));
  };

  const updateTo = (to: number) => {
    setDateRange((prevRange) => ({
      ...prevRange,
      to: to,
    }));
  };

  const sortByName = (order: SortOptions) => {
    setSort({ name: order, created_at: undefined });
  };

  const sortByCreatedAt = (order: SortOptions) => {
    setSort({ name: undefined, created_at: order });
  };

  const productsDashboardContext: ProductsDashboardContext = {
    searchTerm,
    setSearchTerm,
    debouncedSearchTerm,
    limit,
    setLimit,
    offset,
    setOffset,
    dateRange,
    updateFrom,
    updateTo,
    sort,
    sortByName,
    sortByCreatedAt,
    products,
    isLoading,
    error,
  };
  return (
    <ProductsDashboardContext.Provider value={productsDashboardContext}>
      {children}
    </ProductsDashboardContext.Provider>
  );
}

export function useProductDashboardContext() {
  const context = useContext(ProductsDashboardContext);
  return context;
}
