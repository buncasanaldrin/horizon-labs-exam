import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

import { Product } from "@/interfaces";
import { statusOptionsSelect } from "@/constants";
import {
  useFilteredProducts,
  useBulkDeleteProducts,
  useDebounce,
} from "@/hooks";
import { SearchInput, Select, Button, Spinner, Checkbox } from "@/components";
import { stringToBoolean } from "@/utils";

interface ProductListProps {
  handleEditProduct: (product: Product) => void;
  handleViewProduct: (product: Product) => void;
}

const ProductList: React.FC<ProductListProps> = ({
  handleEditProduct,
  handleViewProduct,
}) => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const filter = searchParams.get("filter") || "";
  const status = searchParams.get("isActive") || undefined;
  const [isActive, setIsActive] = useState<string | undefined>(undefined);
  const [selectedProducts, setSelectedProducts] = useState<number[]>([]);
  const [search, setSearch] = useState<string>("");
  const debounceValue = useDebounce(search);

  const {
    data: products,
    isLoading: isFetching,
    isError,
  } = useFilteredProducts({
    name_like: filter,
    isActive: isActive ? stringToBoolean(isActive) : undefined,
  });

  const bulkDelete = useBulkDeleteProducts();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setIsActive(value);
    setSearchParams({ filter, isActive: value });
  };

  const handleEdit = (product: Product) => {
    handleEditProduct(product);
  };

  const handleView = (product: Product) => {
    handleViewProduct(product);
  };

  const handleSelectProduct = (productId: number) => {
    setSelectedProducts((prevState) =>
      prevState.includes(productId)
        ? prevState.filter((id) => id !== productId)
        : [...prevState, productId]
    );
  };

  const handleBulkDelete = async () => {
    if (
      window.confirm("Are you sure you want to delete the selected products?")
    ) {
      await bulkDelete(selectedProducts);
      setSelectedProducts([]);
    }
  };

  useEffect(() => {
    setSearchParams({ filter: debounceValue });
    navigate(`?filter=${debounceValue}`);
  }, [debounceValue]);

  useEffect(() => {
    setIsActive(status);
  }, [status]);

  if (isFetching) {
    return <Spinner />;
  }

  if (isError) {
    return <p>Something went wrong while fetching products</p>;
  }

  return (
    <div className="flex flex-col gap-5 pt-4">
      <p className="text-2xl font-medium">Product List</p>
      <div className="flex items-center gap-10">
        <SearchInput
          name="product"
          placeholder="Search for products..."
          value={search}
          onChange={handleSearch}
          autoFocus
        />
        <Select
          name="isActive"
          options={statusOptionsSelect}
          defaultValue={isActive || "all"}
          onChange={handleStatusChange}
        />
      </div>

      {isFetching && <Spinner />}
      <div className="overflow-x-auto pt-4">
        <table className="table-auto w-full text-xs md:text-base">
          <thead>
            <tr>
              <th className="py-2 text-left">
                <div className="px-4">
                  <Button
                    intent="danger"
                    size="small"
                    disabled={!selectedProducts.length}
                    onClick={handleBulkDelete}
                  >
                    Delete Selected
                  </Button>
                </div>
              </th>
              <th className="py-2 text-left">Name</th>
              <th className="py-2 text-left">Description</th>
              <th className="py-2 text-left">Category</th>
              <th className="py-2 text-left">Status</th>
              <th className="py-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {products?.map((product) => (
              <tr key={product.id}>
                <td
                  className="border px-4 py-2"
                  onClick={() => handleSelectProduct(product.id)}
                >
                  <Checkbox
                    name="products"
                    checked={selectedProducts.includes(product.id)}
                    onChange={() => {}}
                  />
                </td>
                <td className="border px-4 py-2">{product.name}</td>
                <td className="border px-4 py-2">{product.description}</td>
                <td className="border px-4 py-2">{product.categoryName}</td>
                <td className="border px-4 py-2">
                  <div
                    className={`text-white text-center text-xs md:text-sm ${
                      product.isActive ? "bg-green-600" : "bg-slate-400"
                    } p-1 md:p-2 rounded-md`}
                  >
                    {product.isActive ? "active" : "inactive"}
                  </div>
                </td>
                <td className="border px-4 py-2">
                  <div className="flex flex-col md:flex-row justify-between items-center gap-2">
                    <Button intent="sky" onClick={() => handleEdit(product)}>
                      Edit
                    </Button>
                    <Button intent="ghost" onClick={() => handleView(product)}>
                      View
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductList;
