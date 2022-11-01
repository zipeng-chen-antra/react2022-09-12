import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

describe("Button", () => {
  test("should render", () => {
    render(<Button />);
    expect(screen.getByText(/button/i)).toBeInTheDocument();
  });

  test("calls onClick prop when clicked", () => {
    // const user = userEvent.setup();

    const handleClick = jest.fn();
    render(<Button onClick={handleClick} />);
    userEvent.click(screen.getByText(/button/i));
    expect(handleClick).toHaveBeenCalledTimes(1);
    userEvent.click(screen.getByText(/button/i));
    expect(handleClick).toHaveBeenCalledTimes(2);
  });
});
