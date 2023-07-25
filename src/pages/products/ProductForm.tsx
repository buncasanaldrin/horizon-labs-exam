import { useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Product } from "@/interfaces";
import { CategoriesContext } from "@/context";
import { statusOptionsRadio } from "@/constants";
import { useCreateProduct, useUpdateProduct } from "@/hooks";
import { productSchema } from "@/utils";
import { Input, Select, Button, RadioGroup, TextArea } from "@/components";

interface ProductFormProps {
  product?: Product;
  onFormSubmit: (type: "success" | "error", message: string) => void;
}

const ProductForm: React.FC<ProductFormProps> = ({ product, onFormSubmit }) => {
  const { mutate: create, isLoading: isCreating } = useCreateProduct();
  const { mutate: update, isLoading: isUpdating } = useUpdateProduct();

  const categories = useContext(CategoriesContext);

  const onSubmit: SubmitHandler<Product> = async (
    validatedProduct: Product
  ) => {
    const category = categories?.find(
      (category) => category.id === Number(validatedProduct.categoryId)
    );

    const categoryName = category ? category.name : "";

    const payload = {
      ...product,
      ...validatedProduct,
      categoryName,
    };

    if (payload.id) {
      update(payload, {
        onSuccess: () => {
          onFormSubmit("success", "Successfully updated!");
        },
        onError: () => {
          onFormSubmit("error", "An error occurred while updating");
        },
      });
    } else {
      create(payload, {
        onSuccess: () => {
          onFormSubmit("success", "Successfully created!");
          reset();
        },
        onError: () => {
          onFormSubmit("error", "An error occurred while creating");
        },
      });
    }
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<Product>({
    resolver: zodResolver(productSchema),
    defaultValues: product || {},
  });

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-5">
          <p className="text-2xl font-medium">
            {product ? "Update Product" : "Create Product"}
          </p>
          <div>
            <p className="text-sm text-gray-600 mb-1">
              Name <span className="text-red-600">*</span>
            </p>
            <Input name="name" errors={errors} register={register("name")} />
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-1">
              Description <span className="text-red-600">*</span>
            </p>
            <TextArea
              name="description"
              errors={errors}
              register={register("description")}
            />
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-1">
              Category <span className="text-red-600">*</span>
            </p>
            <Select
              name="categoryId"
              errors={errors}
              register={register("categoryId")}
              options={categories || []}
            />
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-1">
              Status <span className="text-red-600">*</span>
            </p>
            <RadioGroup
              name="isActive"
              register={register("isActive")}
              errors={errors}
              options={statusOptionsRadio}
              defaultValue={product?.isActive}
            />
          </div>
          <div className="text-right">
            <Button
              type="submit"
              intent="green"
              disabled={isCreating || isUpdating}
            >
              {isCreating || isUpdating ? "Submiting..." : "Submit"}
            </Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default ProductForm;
