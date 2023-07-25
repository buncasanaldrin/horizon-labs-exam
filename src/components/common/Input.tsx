import { InputHTMLAttributes } from "react";
import { cva, VariantProps } from "class-variance-authority";

const inputStyles = cva(
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

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputStyles> {
  name: string;
  errors: any;
  register?: any;
}

const Input = ({ intent, name, errors, register, ...rest }: InputProps) => {
  return (
    <>
      <input
        {...register}
        {...rest}
        className={inputStyles({ intent })}
        autoComplete="off"
      />
      {errors && errors[name] && (
        <p className="text-red-500 text-sm">{errors[name].message}</p>
      )}
    </>
  );
};

export default Input;
