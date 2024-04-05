import React from "react";
import styles from "./projectbox.module.css";
import Image from "next/image";
import theme from "@/app/theme";

function ProjectBox(props) {
  return (
    <div>
      <Image src={props.image} alt={"bottom curve"} className={styles.image} />
      <h3
        className={styles.header}
        style={{ fontSize: theme.fontSizeS, color: theme.dark }}
      >
        {props.header}
      </h3>
      <p
        className={styles.description}
        style={{ fontSize: theme.fontSizeXXS, color: theme.light }}
      >
        {props.description}
      </p>
    </div>
  );
}

export default ProjectBox;
