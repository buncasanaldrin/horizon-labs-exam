import { SelectHTMLAttributes } from "react";
import { cva, VariantProps } from "class-variance-authority";

const selectStyles = cva(
  "w-full bg-gray-50 border text-black focus:outline-none text-center text-sm px-3 py-3 rounded-md md:text-left placeholder:text-center placeholder:md:text-left",
  {
    variants: {
      intent: {
        primary: "border-gray-200",
        danger: "border-red-500 focus:outline-red-300",
      },
    },
    defaultVariants: {
      intent: "primary",
    },
  }
);

interface SelectProps
  extends SelectHTMLAttributes<HTMLSelectElement>,
    VariantProps<typeof selectStyles> {
  name: string;
  errors?: any;
  register?: any;
  options: { id: number | string; name: string }[];
}

export const Select: React.FC<SelectProps> = ({
  intent,
  name,
  errors,
  register,
  options,
  ...rest
}) => {
  return (
    <>
      <select {...register} {...rest} className={selectStyles({ intent })}>
        {options.map((option, index) => (
          <option key={index} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
      {errors && errors[name] && (
        <p className="text-red-500 text-sm">{errors[name].message}</p>
      )}
    </>
  );
};

export default Select;
