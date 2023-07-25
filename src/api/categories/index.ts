import axios from "axios";

import { Category } from "@/interfaces";
import { API_BASE_URL } from "@/constants";

export const fetchCategories = async (): Promise<Category[]> => {
  const { data } = await axios.get<Category[]>(`${API_BASE_URL}/categories`);

  return data;
};
