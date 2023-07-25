import { useMutation, useQueryClient } from "react-query";

import { deleteProduct } from "@/api";
import { QueryKeys } from "@/constants";

export const useBulkDeleteProducts = () => {
  const queryClient = useQueryClient();
  const deleteProductMutation = useMutation(deleteProduct);

  const bulkDelete = async (productIds: number[]) => {
    for (let productId of productIds) {
      await deleteProductMutation.mutateAsync(productId);
    }

    queryClient.invalidateQueries(QueryKeys.Products);
  };

  return bulkDelete;
};
