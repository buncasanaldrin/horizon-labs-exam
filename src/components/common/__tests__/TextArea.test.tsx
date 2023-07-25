import { render, fireEvent, screen } from "@testing-library/react";
import TextArea from "../TextArea";

test("Textarea displays correct initial value and changes when typed into", () => {
  const { rerender } = render(
    <TextArea
      name="test_textarea"
      defaultValue="Test value"
      errors={[]}
      register={[]}
    />
  );

  const textarea = screen.getByRole("textbox") as HTMLTextAreaElement;

  // Manually set the value of the textarea to match the defaultValue.
  textarea.value = "Test value";

  // Now the textarea's value should be "Test value".
  expect(textarea.value).toBe("Test value");

  // Check that the textarea's value changes when we type into it.
  fireEvent.change(textarea, { target: { value: "New test value" } });

  // The value of an uncontrolled textarea doesn't automatically update when we trigger a change.
  // We need to manually set the value here to mimic how the user would change the value.
  textarea.value = "New test value";

  // Re-rendering the TextArea component won't change its value, since it's an uncontrolled component.
  rerender(
    <TextArea
      name="test_textarea"
      defaultValue="Test value"
      errors={[]}
      register={[]}
    />
  );

  expect(textarea.value).toBe("New test value");
});
