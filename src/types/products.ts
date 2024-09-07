import type { Tag } from "./tags";

export interface Product {
  id: number;
  name: string;
  purchase_price: string;
  sold_price: string | null;
  sold_at: number | null;
  image_link: string | null;
  user_id: number;
  tags: Tag[] | null;
  fees: string | null;
  created_at: number;
}

export interface GetProductsQueryParams {
  limit: number;
  offset: number;
  searchTerm: string;
  dateRange?: {
    from: number;
    to: number;
  };
  sort: {
    name?: "ASC" | "DESC";
    created_at?: "ASC" | "DESC";
  };
}
