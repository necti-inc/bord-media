import React from "react";
import styles from "./aboutheader.module.css";
import theme from "@/app/theme";

function AboutHeader() {
  return (
    <div
      style={{
        backgroundImage: `url(/AP-header.png)`,
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
        We Are Bord Media
      </h1>
      <h2
        className={styles.description}
        style={{ fontSize: theme.fontSizeXXS, color: theme.tan }}
      >
        Learn more about our family!
      </h2>
    </div>
  );
}

export default AboutHeader;
