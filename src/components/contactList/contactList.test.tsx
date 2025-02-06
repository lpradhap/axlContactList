import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Student } from "@/types/student";
import ContactList from "./contactList";

const mockAttendedStudents: Student[] = [
  { id: 1, name: "John Doe", email: "john@example.com", attendance: true },
  { id: 2, name: "Jane Smith", email: "jane@example.com", attendance: true },
];

describe("ContactList", () => {
  test("renders the header when showHeader is true", () => {
    render(<ContactList list={mockAttendedStudents} headerLabel="Attended" />);
    expect(screen.getByText("Attended")).toBeInTheDocument();
  });

  // test("does not render the header when showHeader is false", () => {
  //     render(<ContactList list={ mockStudents } headerLabel = "Student List" showHeader = { false} />);
  //     expect(screen.queryByText("Student List")).not.toBeInTheDocument();
  // });

  // test("renders 'No students found' when the list is empty", () => {
  //     render(<ContactList list={ []} headerLabel = "Student List" />);
  //     expect(screen.getByText("No students found")).toBeInTheDocument();
  // });

  // test("renders the list of students", () => {
  //     render(<ContactList list={ mockStudents } headerLabel = "Student List" />);
  //     expect(screen.getByText("John Doe")).toBeInTheDocument();
  //     expect(screen.getByText("Jane Smith")).toBeInTheDocument();
  // });

  // test("toggles the visibility of the student list", () => {
  //     render(<ContactList list={ mockStudents } headerLabel = "Student List" />);
  //     const toggleButton = screen.getByRole("button");
  //     fireEvent.click(toggleButton);
  //     expect(screen.queryByText("John Doe")).not.toBeInTheDocument();
  //     expect(screen.queryByText("Jane Smith")).not.toBeInTheDocument();
  //     fireEvent.click(toggleButton);
  //     expect(screen.getByText("John Doe")).toBeInTheDocument();
  //     expect(screen.getByText("Jane Smith")).toBeInTheDocument();
  // });
});
