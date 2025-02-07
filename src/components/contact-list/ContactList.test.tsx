import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import ContactList from "./ContactList";
import { Student } from "@/types/student";

describe("ContactList", () => {
  const mockStudents: Student[] = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      thumbnail: "https://randomuser.me/api/portraits/men/72.jpg",
      attendance: true,
    },
    {
      id: 2,
      name: "Robin Reed",
      email: "robinreed@example.com",
      attendance: true,
    },
  ];

  it("renders the list with header and student items", () => {
    render(
      <ContactList
        list={mockStudents}
        headerLabel="Test Header"
        showHeader={true}
      />
    );

    // check if header is in the document
    expect(screen.getByText("Test Header")).toBeInTheDocument();

    // check if mockStudents[0].name is in the document
    expect(screen.getByText(mockStudents[0].name)).toBeInTheDocument();

    // check if mockStudents[1].name is in the document
    expect(screen.getByText(mockStudents[1].name)).toBeInTheDocument();
  });

  it('shows "No students found" message when list is empty', () => {
    render(
      <ContactList list={[]} headerLabel="Empty List" showHeader={true} />
    );

    // check if no students found message is in the document
    expect(screen.getByText("No students found")).toBeInTheDocument();
  });

  it("hides header when showHeader is false", () => {
    render(
      <ContactList
        list={mockStudents}
        headerLabel="Hidden Header"
        showHeader={false}
      />
    );

    // check if header is not in the document
    expect(screen.queryByText("Hidden Header")).not.toBeInTheDocument();
  });

  it("toggles list visibility when header button is clicked", async () => {
    render(
      <ContactList
        list={mockStudents}
        headerLabel="Toggle Test"
        showHeader={true}
      />
    );

    // check if mockStudents[0].name is in the document
    expect(screen.getByText(mockStudents[0].name)).toBeInTheDocument();

    const toggleButton = screen.getByTestId("list-header");
    fireEvent.click(toggleButton);

    // check if mockStudents[0].name is not in the document
    expect(screen.queryByText(mockStudents[0].name)).not.toBeInTheDocument();

    fireEvent.click(toggleButton);

    // check if mockStudents[0].name is in the document
    expect(screen.getByText(mockStudents[0].name)).toBeInTheDocument();
  });
});
