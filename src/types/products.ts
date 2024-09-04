import type { Tag } from "./tags";

export interface Product {
  id: number;
  name: string;
  purchase_price: number;
  sold_price: number | null;
  sold_at: number | null;
  image_link: string | null;
  user_id: number;
  tags: Tag[] | null;
  fees: number | null;
  created_at: number;
}

export interface GetProductsQueryParams {
  limit?: number;
  offset?: number;
  searchTerm?: string;
  dateRange?: {
    from: number;
    to: number;
  };
  sort?: {
    name?: "ASC" | "DESC";
    created_at?: "ASC" | "DESC";
  };
}
