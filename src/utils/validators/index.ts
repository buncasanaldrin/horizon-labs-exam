import { z } from "zod";

export const isActiveSchema = z
  .enum(["true", "false"], { invalid_type_error: "Status is required" })
  .transform((value: string) => value === "true");

export const productSchema = z.object({
  name: z.string().nonempty("Name is required"),
  description: z.string().nonempty("Description is required"),
  categoryId: z
    .union([z.string(), z.number()])
    .transform((value) => String(value)),
  isActive: isActiveSchema,
});
