import { render, screen } from "@testing-library/react";
import Spinner from "../Spinner";

test("Spinner renders correctly", () => {
  render(<Spinner />);
  const spinnerElement = screen.getByTestId("spinner");
  expect(spinnerElement).toBeInTheDocument();
});
