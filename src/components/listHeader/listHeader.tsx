import imgChevronRight from "@/assets/chevronRight.svg";
import Styles from "./listHeader.module.css";

type ListHeaderProps = {
  /** label to be displayed on the header */
  label: string;

  /** flag to determine current section visibility */
  isSectionVisible?: boolean;

  /** callback function to handle toggle change */
  onToggleChange: () => void;
};

/**
 * ListHeader component that displays a header with a toggle button.
 */
export default function ListHeader({
  label,
  isSectionVisible = true,
  onToggleChange,
}: ListHeaderProps) {
  return (
    <div
      className={Styles.wrapper}
      onClick={onToggleChange}
      data-testid="list-header"
    >
      <div>{label}</div>
      <div>
        <img
          className={`${!isSectionVisible ? "" : Styles.isHidden}`}
          src={imgChevronRight}
          alt="search icon"
          data-testid="search-icon"
        />
      </div>
    </div>
  );
}
