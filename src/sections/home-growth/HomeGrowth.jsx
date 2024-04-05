import React from "react";
import styles from "./homegrowth.module.css";
import theme from "@/app/theme";
import Image from "next/image";
import style from "@/components/navigation-navbar/navbar.module.css";

import GrowthImage from "../../../public/HP-growth.png";

function HomeGrowth() {
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <h3
          className={styles.subHeader}
          style={{ fontSize: theme.fontSizeS, color: theme.dark }}
        >
          GROWTH STRATEGY
        </h3>
        <h2
          className={styles.header}
          style={{ fontSize: theme.fontSizeL, color: theme.dark }}
        >
          Growth is the Vision in the Voyage.
        </h2>
        <p
          className={styles.description}
          style={{ fontSize: theme.fontSizeXS, color: theme.dark }}
        >
          It's not just about reaching more eyes, but about charting a course
          that's both innovative and intuitive.
        </p>
      </div>
      <div className={styles.rightContainer}>
        <Image className={styles.growthImage} src={GrowthImage} alt={"test"} />
      </div>
    </div>
  );
}

export default HomeGrowth;
