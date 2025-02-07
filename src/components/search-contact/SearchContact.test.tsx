import { render, screen, fireEvent } from "@testing-library/react";
import SearchContact from "./SearchContact";
import { StudentData } from "@/data";
import { describe, it, vi } from "vitest";

describe("SearchContact", () => {
  vi.mock("@/data", () => ({
    StudentData: [
      {
        id: 1,
        name: "John Doe",
        email: "john@gmail.com",
        thumbnail: "https://randomuser.me/api/portraits/men/75.jpg",
        attendance: true,
      },
      {
        id: 2,
        name: "Dianne Russell",
        email: "diannerussell@gmail.com",
        attendance: false,
      },
    ],
  }));

  it("renders search box and contact lists", () => {
    render(<SearchContact />);

    // check if search box is in the document
    expect(screen.getByTestId("search-input")).toBeInTheDocument();

    // check if attended and absent headers are in the document
    expect(screen.getByText("Attended")).toBeInTheDocument();

    // check if absent header is in the document
    expect(screen.getByText("Absent")).toBeInTheDocument();

    // check if john doe is in the document
    expect(screen.getByText(StudentData[0].name)).toBeInTheDocument();
  });

  it("filters students based on search term", () => {
    render(<SearchContact />);

    const searchInput = screen.getByTestId("search-input");

    fireEvent.change(searchInput, { target: { value: "John" } });

    // check if john doe is in the document
    expect(screen.getByText("John Doe")).toBeInTheDocument();

    // check if dianne russell is not in the document
    expect(screen.queryByText("Dianne Russell")).not.toBeInTheDocument();
  });
});
