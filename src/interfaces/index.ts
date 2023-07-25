export interface Product {
  id: number;
  categoryId: number;
  categoryName: string;
  name: string;
  description: string;
  isActive: boolean;
}

export interface UseFilteredProductsParams {
  _sort?: string;
  _order?: string;
  name_like?: string;
  isActive?: boolean | undefined;
}

export interface Category {
  id: number;
  name: string;
}
