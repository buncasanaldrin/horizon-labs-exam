import React, { InputHTMLAttributes } from "react";
import { cva, VariantProps } from "class-variance-authority";

const checkboxStyles = cva(
  "border text-center text-sm px-3 py-3 h-4 w-4 rounded-md md:text-left placeholder:text-center placeholder:md:text-left",
  {
    variants: {
      intent: {
        primary: "bg-green-800",
        danger: "border-red-500 focus:outline-red-300",
      },
    },
    defaultVariants: {
      intent: "primary",
    },
  }
);

interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange">,
    VariantProps<typeof checkboxStyles> {
  name: string;
  errors?: any;
  register?: any;
  checked: boolean;
  onChange?: (checked: boolean) => void;
  label?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  name,
  errors,
  register,
  intent,
  checked,
  onChange,
  label,
  ...rest
}) => {
  return (
    <label>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className={checkboxStyles({ intent })}
        {...register}
        {...rest}
      />
      {label}
      {errors && errors[name] && (
        <p className="text-red-500 text-sm">{errors[name].message}</p>
      )}
    </label>
  );
};

export default Checkbox;
