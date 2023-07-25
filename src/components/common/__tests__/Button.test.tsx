import { render, screen } from "@testing-library/react";
import Button from "../Button";

test("Button displays the correct text", () => {
  render(<Button>Click me</Button>);

  const buttonElement = screen.getByText(/click me/i);

  expect(buttonElement).toBeInTheDocument();
});
