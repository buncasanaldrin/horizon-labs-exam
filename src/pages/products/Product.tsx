import { useEffect, useState } from "react";

import withDefaultLayout from "@/components/hoc/withDefaultLayout";

import { Product } from "@/interfaces";
import { Button, Modal, Toast } from "@/components";

import ProductList from "./ProductList";
import ProductDetails from "./ProductDetails";
import ProductForm from "./ProductForm";

const ProductPage: React.FC = () => {
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
  const [productToEdit, setProductToEdit] = useState<Product | undefined>(
    undefined
  );
  const [isDetailsOpen, setIsDetailsOpen] = useState<boolean>(false);
  const [productToView, setProductToView] = useState<Product | undefined>(
    undefined
  );
  const [toastDetails, setToastDetails] = useState<
    { type: string; message: string } | undefined
  >(undefined);

  const clearMessage = () => setToastDetails(undefined);

  const handleCreateModal = () => {
    setIsFormOpen(true);
  };

  const handleEditProduct = (product: Product) => {
    setProductToEdit(product);
    setIsFormOpen(true);
  };

  const handleViewProduct = (product: Product) => {
    setProductToView(product);
    setIsDetailsOpen(true);
  };

  const handleFormCloseModal = () => {
    setIsFormOpen(false);
    setProductToEdit(undefined);
  };

  const handleFormSubmit = (type: "success" | "error", message: string) => {
    setToastDetails({ type, message });
    setIsFormOpen(false);
  };

  const handleCloseDetails = () => {
    setIsDetailsOpen(false);
    setProductToView(undefined);
  };

  useEffect(() => {
    // If the form modal is being closed, clear the product to edit
    if (!isFormOpen) {
      setProductToEdit(undefined);
    }
  }, [isFormOpen]);

  return (
    <div className="pt-5 md:p-10">
      {toastDetails && (
        <Toast
          type={toastDetails.type}
          message={toastDetails.message}
          clearMessage={clearMessage}
        />
      )}
      <Modal isOpen={isDetailsOpen} closeModal={handleCloseDetails}>
        {productToView && (
          <ProductDetails
            product={productToView}
            onClose={handleCloseDetails}
          />
        )}
      </Modal>
      <Modal isOpen={isFormOpen} closeModal={handleFormCloseModal}>
        <ProductForm product={productToEdit} onFormSubmit={handleFormSubmit} />
      </Modal>
      <div className="flex flex-col divide-y-4 gap-6">
        <div className="flex justify-end">
          <Button intent="green" onClick={handleCreateModal}>
            <b className="text-xl">+ &nbsp;</b>{" "}
            <span className="text-lg">ADD PRODUCT</span>
          </Button>
        </div>

        <ProductList
          handleEditProduct={handleEditProduct}
          handleViewProduct={handleViewProduct}
        />
      </div>
    </div>
  );
};

export default withDefaultLayout(ProductPage);
