import SearchIcon from "@/assets/search.svg";
import styles from "./SearchBox.module.css";

type SearchBoxProps = {
  /** value for input field */
  value: string;

  /** function to handle the change event */
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;

  /**  Optional:  Placeholder text for the input field */
  placeholder?: string;
};

/**
 * SearchBox Component
 * A reusable search input component with an icon.
 */
export default function SearchBox({
  placeholder = "Search",
  value,
  onChange,
}: SearchBoxProps) {
  return (
    <div className={`${styles.searchWrapper}`} data-testid="search-box">
      <img src={SearchIcon} alt="search icon" data-testid="search-icon" />
      <input
        data-testid="search-input"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={styles.searchInput}
      />
    </div>
  );
}
