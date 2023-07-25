import { render, fireEvent } from "@testing-library/react";
import Checkbox from "../Checkbox";

test("Checkbox can be checked and unchecked", () => {
  let checked = false;
  const handleChange = jest.fn(() => {
    checked = !checked;
  }); // mock the function jest.fn();

  const { getByRole, rerender } = render(
    <Checkbox
      name="test_checkbox"
      label="Test checkbox"
      checked={checked}
      onChange={handleChange} // pass the mocked function.
    />
  );

  const checkbox = getByRole("checkbox") as HTMLInputElement;

  // Initially, the checkbox should be unchecked.
  expect(checkbox.checked).toEqual(false);

  // When we click the checkbox, it should call the handleChange function and check the checkbox.
  fireEvent.click(checkbox);
  expect(handleChange).toHaveBeenCalledTimes(1);

  // We need to rerender the Checkbox component to reflect the new state.
  rerender(
    <Checkbox
      name="test_checkbox"
      label="Test checkbox"
      checked={checked}
      onChange={handleChange}
    />
  );
  expect(checkbox.checked).toEqual(true);

  // When we click the checkbox again, it should uncheck the checkbox.
  fireEvent.click(checkbox);
  expect(handleChange).toHaveBeenCalledTimes(2);

  // We need to rerender the Checkbox component to reflect the new state.
  rerender(
    <Checkbox
      name="test_checkbox"
      label="Test checkbox"
      checked={checked}
      onChange={handleChange}
    />
  );
  expect(checkbox.checked).toEqual(false);
});
