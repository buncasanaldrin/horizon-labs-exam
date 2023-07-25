import { render, fireEvent } from "@testing-library/react";
import Select from "../Select";

test("Select renders correctly and responds to user interaction", () => {
  const options = [
    { id: "1", name: "Option 1" },
    { id: "2", name: "Option 2" },
    { id: "3", name: "Option 3" },
  ];

  const { getByRole, getAllByRole } = render(
    <Select name="test_select" options={options} />
  );

  const selectElement = getByRole("combobox");

  // Check the number of options.
  const selectOptions = getAllByRole("option");
  expect(selectOptions).toHaveLength(options.length);

  // Check the labels of the options.
  options.forEach((option) => {
    expect(getByRole("option", { name: option.name })).toBeInTheDocument();
  });

  // Check user interaction.
  fireEvent.change(selectElement, { target: { value: options[1].id } });
  expect((selectElement as HTMLSelectElement).value).toBe(options[1].id);
});
