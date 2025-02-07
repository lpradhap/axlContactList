import { useEffect, useMemo, useState } from "react";
import SearchBox from "@/components/search-box/SearchBox";
import ContactList from "@/components/contact-list/ContactList";
import { StudentData as StudentList } from "@/data";
import { Student } from "@/types/student";
import Styles from "./SearchContact.module.css";

/**
 * SearchContact component
 * A component that allows users to search for students by name and shows attended and absent students
 */
export default function SearchContact() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [students, setStudents] = useState<Student[]>([]);

  /** Helper function to filter students by attendance and search term */
  const filterStudents = (
    list: Student[],
    keyword: string,
    isAttended: boolean
  ) =>
    list.filter(
      (student) =>
        student.attendance === isAttended &&
        student.name.toLowerCase().includes(keyword.toLowerCase())
    );

  const attendedStudents = useMemo(
    () => filterStudents(students, searchTerm, true),
    [searchTerm, students]
  );

  const absentStudents = useMemo(
    () => filterStudents(students, searchTerm, false),
    [searchTerm, students]
  );

  /** function to update searchTerm on searchbox input onchange */
  const handleSearchChange = (val: string) => {
    setSearchTerm(val);
  };

  useEffect(() => {
    setStudents(StudentList);
  }, []);

  return (
    <div className={Styles.wrapper}>
      <SearchBox onChange={handleSearchChange} value={searchTerm} />
      <ContactList list={attendedStudents} headerLabel="Attended" />
      <ContactList list={absentStudents} headerLabel="Absent" />
    </div>
  );
}
