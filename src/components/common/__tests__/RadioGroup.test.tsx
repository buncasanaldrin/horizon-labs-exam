import { render, fireEvent, screen } from "@testing-library/react";
import RadioGroup from "../RadioGroup";

test("RadioGroup renders correctly and responds to user interaction", () => {
  const options = [
    { value: true, label: "Yes" },
    { value: false, label: "No" },
  ];

  render(
    <RadioGroup
      name="test_radio"
      defaultValue={true}
      errors={[]}
      register={[]}
      options={options}
    />
  );

  // Check the number of radio buttons.
  const radioButtons = screen.getAllByRole("radio") as HTMLInputElement[];
  expect(radioButtons).toHaveLength(options.length);

  // Check the labels of the radio buttons.
  options.forEach((option) => {
    expect(screen.getByText(option.label)).toBeInTheDocument();
  });

  // Check the default value.
  expect(radioButtons[0].checked).toEqual(true);

  // Check user interaction.
  fireEvent.click(radioButtons[1]);
  expect(radioButtons[1].checked).toEqual(true);
});
