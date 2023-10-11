"use client";

import React from "react";
import styles from "./Card.module.css";

const Card = ({ title, items, renderItem }) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <ul className={styles.itemsList}>
        {items.map((item, index) => (
          <li key={index} className={styles.item}>
            {renderItem(item)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
