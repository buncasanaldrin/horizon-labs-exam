import { useQuery } from "react-query";
import { fetchCategories } from "@/api";
import { QueryKeys } from "@/constants";

export const useCategories = () => {
  return useQuery(QueryKeys.Categories, fetchCategories, {
    staleTime: Infinity,
  });
};
