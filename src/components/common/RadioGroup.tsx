import { cva, VariantProps } from "class-variance-authority";

const radioGroupStyles = cva("flex items-center gap-5", {
  variants: {
    intent: {
      primary: "text-black",
      danger: "text-red-500",
    },
  },
  defaultVariants: {
    intent: "primary",
  },
});

interface RadioGroupProps extends VariantProps<typeof radioGroupStyles> {
  name: string;
  defaultValue?: boolean;
  errors: any;
  register: any;
  options: { value: boolean; label: string }[];
}

const RadioGroup: React.FC<RadioGroupProps> = (props) => {
  const { intent, name, defaultValue, errors, register, options, ...rest } =
    props;

  return (
    <div className={radioGroupStyles({ intent })}>
      {options.map((option) => (
        <label key={option.label} className="block">
          <input
            {...register}
            {...rest}
            type="radio"
            value={option.value}
            defaultChecked={option.value === defaultValue}
            className="mr-2 p-4"
          />
          {option.label}
        </label>
      ))}
      {errors && errors[name] && (
        <p className="text-red-500 text-sm">{errors[name].message}</p>
      )}
    </div>
  );
};

export default RadioGroup;
