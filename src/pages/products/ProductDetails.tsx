import { useContext } from "react";

import { Product } from "@/interfaces";
import { useDeleteProduct } from "@/hooks";
import { CategoriesContext } from "@/context";
import { Button } from "@/components";

interface ProductDetailsProps {
  product: Product;
  onClose: () => void;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({
  product,
  onClose,
}) => {
  const { mutate: deleteProduct, isLoading: isDeleting } = useDeleteProduct();
  const categories = useContext(CategoriesContext);
  const category = categories?.find((c) => c.id === product.categoryId);

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      deleteProduct(product.id, {
        onSuccess: () => {
          onClose();
        },
      });
    }
  };

  return (
    <div className="flex flex-col gap-5">
      <p className="text-2xl font-medium">Product Details</p>
      <div>
        <p className="text-sm text-gray-600 mb-1">Name</p>
        <p>{product.name}</p>
      </div>
      <div>
        <p className="text-sm text-gray-600 mb-1">Description</p>
        <p>{product.description}</p>
      </div>
      <div>
        <p className="text-sm text-gray-600 mb-1">Category</p>
        <p>{category?.name}</p>
      </div>
      <div>
        <p className="text-sm text-gray-600 mb-1">Status</p>
        <p>{product.isActive ? "Active" : "Inactive"}</p>
      </div>
      <div className="text-right">
        <Button intent="danger" disabled={isDeleting} onClick={handleDelete}>
          {isDeleting ? "Deleting..." : "Delete Product"}
        </Button>
      </div>
    </div>
  );
};

export default ProductDetails;
