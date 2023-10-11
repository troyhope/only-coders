import { useState } from "react";

import styles from "./CustomSelect.module.css";

function CustomSelect({ options, label }) {
  const [value, setValue] = useState("");

  return (
    <div className={styles.selectContainer}>
      <label
        htmlFor="news-filter"
        className={`${styles.label} ${value && styles.focusedLabel}`}
      >
        {label}
      </label>
      <select
        id="news-filter"
        className={styles.select}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CustomSelect;
