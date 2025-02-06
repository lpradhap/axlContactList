import { useEffect, useMemo, useState } from "react";
import SearchBox from "@/components/searchBox/searchBox";
import ContactList from "@/components/contactList/contactList";
import { StudentData as StudentList } from "@/data";
import { Student } from "@/types/student";
import Styles from "./searchContact.module.css";

export default function SearchContact() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [students, setStudents] = useState<Student[]>(StudentList);

  /** filter students based on attendance and search term */
  const absentStudents = useMemo(() => {
    return students.filter(
      (student) =>
        !student.attendance &&
        student.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [students, searchTerm]);

  /** filter students based on attendance and search term */
  const attendedStudents = useMemo(() => {
    return students.filter(
      (student) =>
        student.attendance &&
        student.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [students, searchTerm]);

  useEffect(() => {
    setStudents(StudentList);
  }, []);

  /** function to update searchTerm on searchbox input onchange */
  function handleSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchTerm(event.target.value);
  }

  return (
    <>
      <div className={Styles.wrapper}>
        <SearchBox onChange={handleSearchChange} value={searchTerm} />
        <ContactList list={attendedStudents} headerLabel="Attended" />
        <ContactList list={absentStudents} headerLabel="Absent" />
      </div>
    </>
  );
}
