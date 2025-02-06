import { Student } from "@/types/student";
import defaultImg from "@/assets/student.png";
import styles from "./contactListItem.module.css";

type ContactListItemProps = {
  /** student object to display */
  student: Student;

  /** variant of the contact list UI
   *
   * @default "standard"
   *
   * @enum "standard" - Component will show Name and thumbnail
   * @enum "email"- Component will show Name, email and thumbnail
   */
  variant?: "standard" | "email";

  /** flag to determine enable state of the item */
  isEnabled?: boolean;
};

/**
 * Contact List Item Component
 * A reusable contact list item component.
 */
export default function ContactListItem({
  student,
  variant = "standard",
  isEnabled = true,
}: ContactListItemProps) {
  return (
    <>
      <div
        className={`${styles.wrapper} ${isEnabled ? styles.enabled : ""} ${
          variant === "email" ? styles.isEmail : ""
        }`}
      >
        <img
          src={student.thumbnail ? student.thumbnail : defaultImg}
          alt={student.name}
        />
        <div className={styles.info}>
          <div className={styles.title}>{student.name}</div>

          {variant === "email" && (
            <div className={styles.email}>{student.email}</div>
          )}
        </div>
      </div>
    </>
  );
}
