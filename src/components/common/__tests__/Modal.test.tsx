import { render, fireEvent, screen } from "@testing-library/react";
import Modal from "../Modal";

test("Modal displays and dismisses correctly", () => {
  const closeModal = jest.fn();
  const { rerender } = render(
    <Modal isOpen={false} closeModal={closeModal}>
      Test content
    </Modal>
  );

  // Modal should not be in the document when "isOpen" is false.
  expect(screen.queryByRole("dialog")).not.toBeInTheDocument();

  // Rerender the modal with "isOpen" true.
  rerender(
    <Modal isOpen={true} closeModal={closeModal}>
      Test content
    </Modal>
  );

  // Modal should be in the document when "isOpen" is true.
  const modal = screen.getByRole("dialog");
  expect(modal).toBeInTheDocument();

  // Modal should display the children.
  expect(screen.getByText("Test content")).toBeInTheDocument();

  // Clicking the overlay should call closeModal.
  fireEvent.click(screen.getByText("X"));
  expect(closeModal).toHaveBeenCalledTimes(1);
});
