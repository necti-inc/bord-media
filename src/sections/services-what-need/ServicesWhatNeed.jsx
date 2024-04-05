import React from "react";
import styles from "./serviceswhatneed.module.css";
import theme from "@/app/theme";
import GeneralButtonAlt from "@/components/general-button-alt/GeneralButton";

function ServicesWhatNeed() {
  return (
    <div className={styles.container}>
      <h2
        className={styles.header}
        style={{ fontSize: theme.fontSizeXLL, color: theme.dark }}
      >
        What kind of Management do I need?
      </h2>
      <div className={styles.buttonContainer}>
        <GeneralButtonAlt header={"META"} />
        <GeneralButtonAlt header={"YELP"} />
        <GeneralButtonAlt header={"NEXT DOOR"} />
      </div>
      <h3
        className={styles.subHeader}
        style={{ fontSize: theme.fontSizeMS, color: theme.dark }}
      >
        Engagement-Focused • High-Impact • Creative{" "}
      </h3>
    </div>
  );
}

export default ServicesWhatNeed;
