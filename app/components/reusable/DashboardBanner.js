"use client";

import styles from "./DashboardBanner.module.css";

const DashboardBanner = ({ title, blurb, backgroundImage }) => {
  const bannerStyle = backgroundImage
    ? { backgroundImage: `url(${backgroundImage})` }
    : { background: "linear-gradient(to right, #5d5df5, #00d2e0)" };

  return (
    <div className={styles.banner} style={bannerStyle}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.blurb}>{blurb}</p>
      </div>
    </div>
  );
};

export default DashboardBanner;
