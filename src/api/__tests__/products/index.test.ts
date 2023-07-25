import axios from "axios";
import MockAdapter from "axios-mock-adapter";

import { Product } from "@/interfaces";
import {
  fetchProducts,
  fetchProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from "@/api";

// Set mock adapter on the default instance
var mock = new MockAdapter(axios);

const mockProducts: Product[] = [
  {
    id: 1,
    name: "iPhone 9",
    description: "An apple mobile which is nothing like apple",
    isActive: false,
    categoryId: 4,
    categoryName: "Books",
  },
  {
    id: 2,
    name: "iPhone X",
    description:
      "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
    categoryId: 16,
    isActive: true,
    categoryName: "Video Games",
  },
];
const mockProduct: Product = {
  id: 1,
  name: "iPhone 9",
  description: "An apple mobile which is nothing like apple",
  isActive: false,
  categoryId: 4,
  categoryName: "Books",
};

beforeEach(() => {
  mock.reset();

  mock.onGet().reply((config) => {
    // Check if URL ends with '/products'
    if (config.url?.endsWith("/products")) {
      return [200, mockProducts];
    }

    // Check if URL matches the pattern '/products/:id'
    const match = config.url?.match(/\/products\/(\d+)/);
    if (match) {
      const id = parseInt(match[1], 10);
      const product = mockProducts.find((p) => p.id === id);
      return product ? [200, product] : [404, { message: "Product not found" }];
    }

    // If none of the conditions matched, return a 404
    return [404, { message: "Not found" }];
  });

  mock.onPost().reply((config) => {
    const newProduct = JSON.parse(config.data);
    return [200, newProduct];
  });

  mock.onPut(/\/products\/\d+/).reply((config) => {
    const updatedProduct = JSON.parse(config.data);
    return [200, updatedProduct];
  });

  mock.onDelete(/\/products\/\d+/).reply(200, {});
});

test("fetches products from the API", async () => {
  const data = await fetchProducts();
  expect(data).toEqual(mockProducts);
});

test("fetches single product from the API", async () => {
  const data = await fetchProduct(1);
  expect(data).toEqual(mockProduct);
});

test("creates a product from the API", async () => {
  const newProduct = { ...mockProduct, id: 3 };

  const data = await createProduct(newProduct);
  expect(data).toEqual(newProduct);
});

test("updates a product from the API", async () => {
  const updatedProduct = { ...mockProduct, name: "iPhone 9 Updated" };
  const data = await updateProduct(updatedProduct);
  expect(data).toEqual(updatedProduct);
});

test("deletes a product from the API", async () => {
  const data = await deleteProduct(1);
  expect(data).toEqual({});
});
