import axios from "axios";

import { Product, UseFilteredProductsParams } from "@/interfaces";
import { API_BASE_URL } from "@/constants";

export const fetchProducts = async (
  params?: UseFilteredProductsParams
): Promise<Product[]> => {
  const { data } = await axios.get<Product[]>(`${API_BASE_URL}/products`, {
    params,
  });

  return data;
};

export const fetchProduct = async (id: number): Promise<Product> => {
  const { data } = await axios.get<Product>(`${API_BASE_URL}/products/${id}`);

  return data;
};

export const createProduct = async (newProduct: Product): Promise<Product> => {
  const { data } = await axios.post<Product>(
    `${API_BASE_URL}/products`,
    newProduct
  );

  return data;
};

export const updateProduct = async (
  updatedProduct: Product
): Promise<Product> => {
  const { data } = await axios.put<Product>(
    `${API_BASE_URL}/products/${updatedProduct.id}`,
    updatedProduct
  );

  return data;
};

export const deleteProduct = async (id: number): Promise<Product> => {
  const { data } = await axios.delete<Product>(
    `${API_BASE_URL}/products/${id}`
  );

  return data;
};
