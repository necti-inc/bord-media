import React from "react";
import styles from "./generalbutton.module.css";
import theme from "@/app/theme";
import Link from "next/link";

function GeneralButtonExternal(props) {
  return (
    <a href={props.buttonPath}>
      <div className={styles.container}>
        <p
          className={styles.header}
          style={{ fontSize: theme.fontSizeXXS, color: theme.secondary }}
        >
          {props.header}
        </p>
        <div className={styles.line} style={{ borderColor: theme.secondary }} />
      </div>
    </a>
  );
}

export default GeneralButtonExternal;
