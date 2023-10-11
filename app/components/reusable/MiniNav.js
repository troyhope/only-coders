"use client";

import { useState } from "react";

import CustomSelect from "./CustomSelect";

import styles from "./MiniNav.module.css";

const MiniNav = ({ onFilterChange }) => {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const handleFilterChange = (event) => {
    const value = event.target.value;
    setSelectedFilter(value);
    onFilterChange(value);
  };

  return (
    <div className={styles.miniNav}>
      <div className={styles.linkContainer}>
        <span className={styles.link}>All Updates</span>
        <div className={styles.underline}></div>
      </div>
      <div className={styles.dropdownContainer}>
        <CustomSelect
          label="Show"
          options={[
            { label: "Everything", value: "everything" },
            { label: "Groups", value: "groups" },
            { label: "Friends", value: "friends" },
          ]}
        />
      </div>
    </div>
  );
};

export default MiniNav;
