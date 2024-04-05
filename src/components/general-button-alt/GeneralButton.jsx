import React from "react";
import styles from "./generalbutton.module.css";
import theme from "@/app/theme";

function GeneralButtonAlt(props) {
  return (
    <div className={styles.container}>
      <p
        className={styles.header}
        style={{ fontSize: theme.fontSizeXXS, color: theme.dark }}
      >
        {props.header}
      </p>
      <div className={styles.line} style={{ borderColor: theme.alt }} />
    </div>
  );
}

export default GeneralButtonAlt;
