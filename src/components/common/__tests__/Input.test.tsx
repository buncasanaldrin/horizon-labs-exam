import { render, fireEvent } from "@testing-library/react";
import Input from "../Input";

test("Input updates value and triggers onChange when typed into", () => {
  const handleChange = jest.fn();
  const { getByRole } = render(
    <Input name="test_input" errors={[]} onChange={handleChange} />
  );

  const input = getByRole("textbox") as HTMLInputElement;

  // Initially, the input should be empty.
  expect(input.value).toBe("");

  // When we type into the input, it should call the handleChange function and update the input value.
  fireEvent.change(input, { target: { value: "test" } });
  expect(handleChange).toHaveBeenCalledTimes(1);
  expect(input.value).toBe("test");
});
