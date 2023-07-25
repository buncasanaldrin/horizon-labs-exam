import { render, screen } from "@testing-library/react";
import Toast from "../Toast";

test("Toast displays the correct message", () => {
  render(
    <Toast type="success" message="Test message" clearMessage={jest.fn()} />
  );

  const toastMessage = screen.getByText(/test message/i);
  expect(toastMessage).toBeInTheDocument();
});
