import { Student } from "@/types/student";
import styles from "./contactList.module.css";
import ContactListItem from "@/components/contact-list-item/ContactListItem";
import ListHeader from "@/components/list-header/ListHeader";
import { useCallback, useState } from "react";

type ContactListProps = {
  /** List of student objects to display in the  list. */
  list: Student[];

  /** Label to display in the header section. */
  headerLabel: string;

  /** Flag to determine whether the header should be displayed. Defaults to `true`. */
  showHeader?: boolean;
};

/**
 * component that displays a list of students with an optional header.
 * The list can be toggled visible or hidden using the header's toggle button.
 */
export default function ContactList({
  list,
  showHeader = true,
  headerLabel,
}: ContactListProps) {
  const [isListVisible, setIsListVisible] = useState<boolean>(true);

  /**
   * Toggles the visibility of the student list.
   */
  const handleToggleChange = useCallback(() => {
    setIsListVisible((prevIsListVisible) => !prevIsListVisible);
  }, []);

  return (
    <>
      {showHeader && (
        <ListHeader
          label={headerLabel}
          isSectionVisible={isListVisible}
          onToggleChange={handleToggleChange}
        />
      )}
      {isListVisible && (
        <div>
          {list.length === 0 ? (
            <div className={styles.noItemAvailable}>No students found</div>
          ) : (
            list.map((student) => (
              <div key={student.id}>
                <ContactListItem
                  student={student}
                  variant="email"
                  isEnabled={false}
                />
              </div>
            ))
          )}
        </div>
      )}
    </>
  );
}
