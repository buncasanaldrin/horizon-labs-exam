import { ButtonHTMLAttributes } from "react";
import { cva, VariantProps } from "class-variance-authority";

const buttonSyles = cva(
  "font-montserrat py-3 px-3 md:py-3 md:px-8 duration-300 text-xs",
  {
    variants: {
      intent: {
        primary: "bg-easybay text-white hover:opacity-80 disabled:opacity-20",
        secondary:
          "bg-moonraker text-easybay hover:opacity-80 disabled:opacity-20",
        green: "bg-green-700 text-white hover:opacity-80 disabled:opacity-20",
        danger: "bg-red-700 text-white hover:opacity-80 disabled:opacity-20",
        sky: "bg-sky-600 text-white hover:opacity-80 disabled:opacity-20",
        ghost: "bg-ghost text-easybay hover:opacity-80 disabled:opacity-20",
      },
      size: {
        small: "px-2 md:px-4 py-1 md:py-2",
        medium: "px-3 md:px-8 py-2 md:py-3",
      },
      fullWidth: {
        true: "w-full",
      },
      rounded: {
        small: "rounded-sm",
        medium: "rounded-md",
      },
    },
    defaultVariants: {
      intent: "primary",
      size: "medium",
      rounded: "medium",
    },
  }
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonSyles> {
  children: React.ReactNode;
}

const Button = ({
  children,
  intent,
  size,
  fullWidth,
  rounded,
  type = "button",
  disabled = false,
  onClick,
}: ButtonProps) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={buttonSyles({ intent, size, fullWidth, rounded })}
    >
      {children}
    </button>
  );
};

export default Button;
