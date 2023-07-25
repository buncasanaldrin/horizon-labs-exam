import { useMutation, useQueryClient } from "react-query";

import { updateProduct } from "@/api";
import { Product } from "@/interfaces";
import { QueryKeys } from "@/constants";

export const useUpdateProduct = () => {
  const queryClient = useQueryClient();

  return useMutation(
    (updatedProduct: Product) => updateProduct(updatedProduct),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(QueryKeys.Products);
      },
    }
  );
};
