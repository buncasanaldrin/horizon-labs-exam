import { useMutation, useQueryClient } from "react-query";

import { deleteProduct } from "@/api";
import { QueryKeys } from "@/constants";

export const useDeleteProduct = () => {
  const queryClient = useQueryClient();

  return useMutation(deleteProduct, {
    onSuccess: () => {
      queryClient.invalidateQueries(QueryKeys.Products);
    },
  });
};
