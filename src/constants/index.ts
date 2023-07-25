// export const API_BASE_URL =
//   import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";

export const API_BASE_URL = "http://localhost:3000";

export enum QueryKeys {
  Products = "products",
  Product = "product",
  Categories = "categories",
}

export const statusOptionsRadio = [
  { value: true, label: "Active" },
  { value: false, label: "Inactive" },
];

export const statusOptionsSelect = [
  { id: "all", name: "All" },
  { id: "true", name: "Active" },
  { id: "false", name: "Inactive" },
];
