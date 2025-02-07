import { render, screen, fireEvent } from "@testing-library/react";
import ListHeader from "./listHeader";
import { describe, it, vi } from "vitest";

describe("ListHeader", () => {
  it("should display passed heading", () => {
    render(
      <ListHeader
        label="Absent"
        onToggleChange={() => {}}
        isSectionVisible={true}
      />
    );
    const heading = screen.getByText("Absent");

    // check if heading is in the document
    expect(heading).toBeVisible();
  });

  it("should call onToggleChange when clicked", () => {
    const mockToggle = vi.fn();
    render(
      <ListHeader
        label="Absent"
        onToggleChange={mockToggle}
        isSectionVisible={true}
      />
    );

    const wrapper = screen.getByTestId("list-header");
    fireEvent.click(wrapper!);

    // check if mockToggle is called
    expect(mockToggle).toHaveBeenCalledTimes(1);
  });

  it("should show chevron icon right direction when section is not visible", () => {
    render(
      <ListHeader
        label="Absent"
        onToggleChange={() => {}}
        isSectionVisible={false}
      />
    );

    const icon = screen.getByTestId("search-icon");

    // check if icon class does not contain isHidden
    expect(icon.className).not.toContain("isHidden");
  });

  it("should hide chevron icon down direction when section is visible", () => {
    render(
      <ListHeader
        label="Absent"
        onToggleChange={() => {}}
        isSectionVisible={true}
      />
    );

    const icon = screen.getByTestId("search-icon");

    // check if icon class contains isHidden
    expect(icon.className).toContain("isHidden");
  });
});
