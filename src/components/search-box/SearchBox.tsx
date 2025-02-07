import SearchIcon from "@/assets/search.svg";
import styles from "./SearchBox.module.css";
import { memo } from "react";

type SearchBoxProps = {
  /** value for input field */
  value: string;

  /** function to handle the change event */
  onChange: (value: string) => void;

  /**  Optional:  Placeholder text for the input field */
  placeholder?: string;
};

/**
 * SearchBox Component
 * A reusable search input component with an icon.
 */
function SearchBox({
  placeholder = "Search",
  value,
  onChange,
}: SearchBoxProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      onChange(event.target.value);
    } catch (error) {
      console.error("Error in SearchBox onChange:", error);
    }
  };

  return (
    <div className={`${styles.searchWrapper}`} data-testid="search-box">
      <img src={SearchIcon} alt="search icon" data-testid="search-icon" />
      <input
        data-testid="search-input"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className={styles.searchInput}
      />
    </div>
  );
}

export default memo(SearchBox, (prevProps, nextProps) => {
  return (
    prevProps.value === nextProps.value &&
    prevProps?.placeholder === nextProps?.placeholder &&
    prevProps.onChange === nextProps.onChange
  );
});
