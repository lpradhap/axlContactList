import { render, screen, fireEvent } from "@testing-library/react";
import SearchBox from "./SearchBox";
import { vi } from "vitest";
describe("SearchBox", () => {
  it("renders all required elements", () => {
    render(<SearchBox value="" onChange={() => {}} />);

    // check if search icon is in the document
    expect(screen.getByTestId("search-icon")).toBeInTheDocument();

    // check if search input is in the document
    expect(screen.getByTestId("search-input")).toBeInTheDocument();
  });

  it("renders with default placeholder", () => {
    render(<SearchBox value="" onChange={() => {}} />);

    const inputElement = screen.getByTestId("search-input");

    // check if input element has placeholder "Search"
    expect(inputElement).toHaveAttribute("placeholder", "Search");
  });

  it("renders with custom placeholder", () => {
    const customPlaceholder = "custom text";
    render(
      <SearchBox value="" onChange={() => {}} placeholder={customPlaceholder} />
    );

    const inputElement = screen.getByTestId("search-input");

    // check if input element has placeholder "custom text"
    expect(inputElement).toHaveAttribute("placeholder", customPlaceholder);
  });

  it("displays the provided value", () => {
    const testValue = "test value";
    render(<SearchBox value={testValue} onChange={() => {}} />);

    const inputElement = screen.getByTestId("search-input");

    // check if input element has value "test value"
    expect(inputElement).toHaveValue(testValue);
  });

  it("calls onChange when input value changes", () => {
    const handleChange = vi.fn();
    render(<SearchBox value="" onChange={handleChange} />);

    const inputElement = screen.getByTestId("search-input");
    fireEvent.change(inputElement, { target: { value: "new value" } });

    // check if handleChange is called
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
