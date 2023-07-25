import { useMutation, useQueryClient } from "react-query";

import { createProduct } from "@/api";
import { Product } from "@/interfaces";
import { QueryKeys } from "@/constants";

export const useCreateProduct = () => {
  const queryClient = useQueryClient();

  return useMutation((newProduct: Product) => createProduct(newProduct), {
    onSuccess: () => {
      queryClient.invalidateQueries(QueryKeys.Products);
    },
  });
};
