import { useState, useContext, createContext, ReactNode } from "react";
import { useDebounce } from "@uidotdev/usehooks";
import {
  useProducts,
  useAddProduct,
  AddProductParams,
  useEditProduct,
  EditProductParams,
} from "~/requestHooks";
import type { Product, GetProductsQueryParams } from "~/types";
import { UseMutationResult } from "@tanstack/react-query";
import { useSelection, Selection } from "../custom_hooks";

export const DEFAULT_LIMIT = 50;
export const DEFAULT_OFFSET = 0;

type SortOptions = "ASC" | "DESC";

export type ProductsDashboardContext = {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  debouncedSearchTerm: string;
  limit: number;
  setLimit: (value: number) => void;
  offset: number;
  setOffset: (value: number) => void;
  dateRange?: {
    from: number;
    to: number;
  };
  setDateRange: (value: { from: number; to: number }) => void;
  sort: {
    name?: SortOptions;
    created_at?: SortOptions;
  };
  sortByName: (order: SortOptions) => void;
  sortByCreatedAt: (order: SortOptions) => void;
  isLoading: boolean;
  isFetching: boolean;
  products: Product[] | undefined;
  error: Error | null;
  next: () => void;
  previous: () => void;
  addProduct: UseMutationResult<unknown, unknown, AddProductParams, unknown>;
  editProduct: UseMutationResult<unknown, unknown, EditProductParams, unknown>;
  getProductsParams: GetProductsQueryParams;
  selectionOptions: Selection<number>;
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
  const [dateRange, setDateRange] = useState<
    | undefined
    | {
        from: number;
        to: number;
      }
  >(undefined);
  const [sort, setSort] = useState<ProductsDashboardContext["sort"]>({
    created_at: "DESC",
  });
  const getProductsParams = {
    limit: limit,
    offset: offset,
    searchTerm: debouncedSearchTerm,
    dateRange: dateRange,
    sort: sort,
  };
  const {
    data: products,
    isLoading,
    error,
    isFetching,
  } = useProducts(getProductsParams);
  const addProduct = useAddProduct();
  const editProduct = useEditProduct();

  const productIds = products?.map((product) => product.id);
  const {
    selected,
    allSelected,
    someSelected,
    toggleAll,
    toggle,
    isSelected,
    clear,
    enable,
    disable,
    isEnabled,
  } = useSelection<number>({ options: productIds || [] });

  const selectionOptions: Selection<number> = {
    selected,
    allSelected,
    someSelected,
    toggleAll,
    toggle,
    isSelected,
    clear,
    enable,
    disable,
    isEnabled,
  };

  const sortByName = (order: SortOptions) => {
    setSort({ name: order });
  };

  const sortByCreatedAt = (order: SortOptions) => {
    setSort({ created_at: order });
  };

  const next = () => {
    setOffset((prev) => prev + DEFAULT_LIMIT);
  };

  const previous = () => {
    setOffset((prev) => prev - DEFAULT_LIMIT);
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
    setDateRange,
    sort,
    sortByName,
    sortByCreatedAt,
    products,
    isLoading,
    isFetching,
    error,
    next,
    previous,
    addProduct,
    editProduct,
    getProductsParams,
    selectionOptions,
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
