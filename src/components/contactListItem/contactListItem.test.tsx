import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import ContactListItem from "./contactListItem";
import { Student } from "@/types/student";
import defaultImg from "@/assets/student.png";

describe("ContactListItem", () => {
  const mockStudent: Student = {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    thumbnail: "https://randomuser.me/api/portraits/men/72.jpg",
    attendance: true,
  };

  it("should render student name", () => {
    render(<ContactListItem student={mockStudent} />);

    // check if mockStudent.name is in the document
    expect(screen.getByText(mockStudent.name)).toBeVisible();
  });

  it("should render student thumbnail when provided", () => {
    render(<ContactListItem student={mockStudent} />);
    const img = screen.getByTestId("student-thumbnail") as HTMLImageElement;

    // check if mockStudent.thumbnail is in the document
    expect(img.src).toBe(mockStudent.thumbnail);
  });

  it("should render default thumbnail when student thumbnail is not provided", () => {
    const studentWithoutThumbnail = { ...mockStudent, thumbnail: "" };
    render(<ContactListItem student={studentWithoutThumbnail} />);
    const img = screen.getByTestId("student-thumbnail") as HTMLImageElement;

    // check if defaultImg is in the document
    expect(img.src).toContain(defaultImg);
  });

  describe("variant: standard", () => {
    it("should not display email", () => {
      render(<ContactListItem student={mockStudent} variant="standard" />);

      // check if mockStudent.email is not in the document
      expect(screen.queryByText(mockStudent.email)).not.toBeInTheDocument();
    });

    it("should not have isEmail class", () => {
      render(<ContactListItem student={mockStudent} variant="standard" />);
      const wrapper = screen.getByTestId("contact-list-item");

      // check if wrapper class does not contain "isEmail"
      expect(wrapper?.className).not.toContain("isEmail");
    });
  });

  describe("variant: email", () => {
    it("should display email", () => {
      render(<ContactListItem student={mockStudent} variant="email" />);

      // check if mockStudent.email is in the document
      expect(screen.getByText(mockStudent.email)).toBeVisible();
    });

    it("should have isEmail class", () => {
      render(<ContactListItem student={mockStudent} variant="email" />);

      const wrapper = screen.getByTestId("contact-list-item");

      // check if wrapper class contains isEmail
      expect(wrapper?.className).toContain("isEmail");
    });
  });

  describe("enabled state", () => {
    it("should have enabled class when isEnabled is true", () => {
      render(<ContactListItem student={mockStudent} isEnabled={true} />);
      const wrapper = screen.getByTestId("contact-list-item");

      // check if wrapper class contains enabled
      expect(wrapper?.className).toContain("enabled");
    });

    it("should not have enabled class when isEnabled is false", () => {
      render(<ContactListItem student={mockStudent} isEnabled={false} />);
      const wrapper = screen.getByTestId("contact-list-item");

      // check if wrapper class does not contain enabled
      expect(wrapper?.className).not.toContain("enabled");
    });
  });
});
