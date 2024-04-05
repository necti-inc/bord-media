import React from "react";
import styles from "./generalbutton.module.css";
import theme from "@/app/theme";
import Link from "next/link";

function GeneralButtonLight(props) {
  return (
    <Link href={props.buttonPath}>
      <div className={styles.container}>
        <p
          className={styles.header}
          style={{ fontSize: theme.fontSizeXXS, color: theme.tan }}
        >
          {props.header}
        </p>
        <div className={styles.line} style={{ borderColor: theme.tan }} />
      </div>
    </Link>
  );
}

export default GeneralButtonLight;
