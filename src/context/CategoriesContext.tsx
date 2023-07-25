import React from "react";

import { Category } from "@/interfaces";

const CategoriesContext = React.createContext<Category[] | undefined>(
  undefined
);

export default CategoriesContext;
