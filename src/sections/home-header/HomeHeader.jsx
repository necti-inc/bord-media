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
        Elevating Your Brand's Voice with Striking Social Media Strategies that
        Captivate, Engage, and Build Trust.
      </h1>
    </div>
  );
}

export default HomeHeader;
