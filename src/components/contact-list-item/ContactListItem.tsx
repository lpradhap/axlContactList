import { Student } from "@/types/student";
import defaultImg from "@/assets/student.png";
import styles from "./ContactListItem.module.css";
import { memo } from "react";

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
function ContactListItem({
  student,
  variant = "standard",
  isEnabled = true,
}: ContactListItemProps) {
  const wrapperClasses = [
    styles.wrapper,
    isEnabled && styles.enabled,
    variant === "email" && styles.isEmail,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={wrapperClasses} data-testid="contact-list-item">
      <img
        src={student.thumbnail ? student.thumbnail : defaultImg}
        alt={student.name}
        data-testid="student-thumbnail"
        loading="lazy"
      />
      <div className={styles.info}>
        <div className={styles.title}>{student.name}</div>

        {variant === "email" && (
          <div className={styles.email}>{student.email}</div>
        )}
      </div>
    </div>
  );
}

export default memo(ContactListItem, (prevProps, nextProps) => {
  return (
    prevProps.student.id === nextProps.student.id &&
    prevProps.variant === nextProps.variant &&
    prevProps.isEnabled === nextProps.isEnabled
  );
});
