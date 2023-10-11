import Image from "next/image";

import styles from "./Avatar.module.css";

const Avatar = ({ imageUrl, altText }) => (
  <div className={styles.main}>
    <div className={styles.container}>
      <div className={styles.hexagon}>
        {imageUrl ? (
          <div className={styles.hexagonIn1}>
            <div className={styles.hexagonIn2}>
              <Image
                style={{ objectFit: "cover" }}
                width={33}
                height={33}
                src={imageUrl}
                alt={altText || "User Avatar"}
                className={styles.image}
              />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  </div>
);

export default Avatar;
