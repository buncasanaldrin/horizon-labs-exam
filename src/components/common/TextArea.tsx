import { TextareaHTMLAttributes } from "react";
import { cva, VariantProps } from "class-variance-authority";

const inputSyles = cva(
  "w-full bg-gray-50 text-black border focus:outline-none text-center text-sm px-3 py-3 rounded-md md:text-left placeholder:text-center placeholder:font-montserrat placeholder:md:text-left placeholder:text-xs resize-none",
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

interface TextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof inputSyles> {
  name: string;
  errors: any;
  register: any;
}

const TextArea = ({ intent, name, errors, register }: TextAreaProps) => {
  return (
    <>
      <textarea
        {...register}
        className={inputSyles({ intent })}
        rows={4}
        cols={50}
        maxLength={200}
        wrap="hard"
        autoComplete="off"
      />
      {errors[name] && (
        <p className="text-red-500 text-sm">{errors[name].message}</p>
      )}
    </>
  );
};

export default TextArea;
