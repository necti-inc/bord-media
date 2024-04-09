import React from "react";
import styles from "./homeheader.module.css";
import theme from "@/app/theme";

function HomeHeader() {
  return (
    <div
      style={{
        backgroundImage: `url(/HP-header.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "680px",
        width: "auto",
      }}
      className={styles.container}
    >
      <h1
        className={styles.header}
        style={{ fontSize: theme.fontSizeL, color: theme.tan }}
      >
        Welcome to Bord Media
      </h1>
      <h2
        className={styles.description}
        style={{ fontSize: theme.fontSizeXXS, color: theme.tan }}
      >
        Become part of our family!
      </h2>
    </div>
  );
}

export default HomeHeader;
