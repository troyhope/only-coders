"use client";

import styles from "./CardItem.module.css";

const CardItem = ({ avatar, title, subtitle, rightIcon, divider }) => {
  return (
    <div className={styles.cardItemContainer}>
      <div className={styles.cardItem}>
        {avatar}
        <div className={styles.textContainer}>
          <div className={styles.title}>{title}</div>
          <div className={styles.subtitle}>{subtitle}</div>
        </div>
        {rightIcon && <div className={styles.rightIcon}>{rightIcon}</div>}
      </div>
      {divider && <hr className={styles.divider} />}
    </div>
  );
};

export default CardItem;
