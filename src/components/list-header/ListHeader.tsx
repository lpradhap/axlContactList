import imgChevronRight from "@/assets/chevronRight.svg";
import Styles from "./ListHeader.module.css";
import { memo } from "react";

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
function ListHeader({
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
          className={`${isSectionVisible ? Styles.isExpanded : ""}`}
          src={imgChevronRight}
          alt="search icon"
          data-testid="search-icon"
        />
      </div>
    </div>
  );
}

export default memo(ListHeader, (prevProps, nextProps) => {
  return (
    prevProps.label === nextProps.label &&
    prevProps?.isSectionVisible === nextProps?.isSectionVisible &&
    prevProps.onToggleChange === nextProps.onToggleChange
  );
});
