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
}

const SearchInput = ({ intent, name, ...rest }: InputProps) => {
  return (
    <>
      <input {...rest} className={inputStyles({ intent })} autoComplete="off" />
    </>
  );
};

export default SearchInput;
