import React from "react";
import styles from "./aboutcta.module.css";
import theme from "@/app/theme";
import GeneralButtonLight from "@/components/general-button-light/GeneralButton";

function AboutCta() {
  return (
    <div className={styles.container} style={{ backgroundColor: theme.alt }}>
      <h2
        className={styles.header}
        style={{ fontSize: theme.fontSizeL, color: theme.tan }}
      >
        We do what we love...
      </h2>
      <h3
        className={styles.description}
        style={{ fontSize: theme.fontSizeXS, color: theme.tan }}
      >
        Sculpting engaging, insight-driven content that forges meaningful
        relationships. Driven by deep enthusiasm and authentic affection for the
        online world, we consider it an honor to navigate this thrilling path
        alongside our partners.
      </h3>
      <div className={styles.buttonContainer}>
        <GeneralButtonLight header={"Join Us Today"} buttonPath={"/contact"} />
      </div>
    </div>
  );
}

export default AboutCta;
