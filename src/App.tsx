import { BrowserRouter as Router } from "react-router-dom";

import { CategoriesContext } from "@/context";
import { useCategories } from "@/hooks";
import { Product } from "@/pages";
import { Spinner } from "@/components";

const App = () => {
  const { data: categories, isLoading, isError } = useCategories();

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <p>Something went wrong while fetching categories</p>;
  }

  return (
    <Router>
      <CategoriesContext.Provider value={categories}>
        <Product />
      </CategoriesContext.Provider>
    </Router>
  );
};

export default App;
