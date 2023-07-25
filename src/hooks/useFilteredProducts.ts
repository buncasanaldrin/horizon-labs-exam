import { useQuery } from "react-query";

import { UseFilteredProductsParams } from "@/interfaces";
import { QueryKeys } from "@/constants";
import { fetchProducts } from "@/api";

export const useFilteredProducts = ({
  name_like,
  isActive,
}: UseFilteredProductsParams) => {
  const params: UseFilteredProductsParams = { _sort: "id", _order: "desc" };

  if (name_like) params.name_like = name_like;
  if (isActive !== undefined) params.isActive = isActive;

  return useQuery([QueryKeys.Products, params], () => fetchProducts(params));
};
