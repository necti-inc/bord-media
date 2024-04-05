import React from "react";
import styles from "./faqheader.module.css";
import theme from "@/app/theme";

function FaqHeader() {
  return (
    <div className={styles.container}>
      <h2
        className={styles.subHeader}
        style={{ fontSize: theme.fontSizeXS, color: theme.light }}
      >
        FREQUENTLY ASKED QUESTIONS
      </h2>
      <h1
        className={styles.header}
        style={{ fontSize: theme.fontSizeXLL, color: theme.dark }}
      >
        Dive into FAQs to Transform Your Business from Great to Unforgettable.
      </h1>
    </div>
  );
}

export default FaqHeader;
