import { render, fireEvent } from "@testing-library/react";
import SearchInput from "../SearchInput";

test("SearchInput updates value when typed into", () => {
  const { getByRole } = render(<SearchInput name="test_input" />);

  const inputElement = getByRole("textbox") as HTMLInputElement;

  // Initially, the input should be empty.
  expect(inputElement.value).toBe("");

  // When we type into the input, it should update its value.
  fireEvent.change(inputElement, { target: { value: "test value" } });
  expect(inputElement.value).toBe("test value");
});
