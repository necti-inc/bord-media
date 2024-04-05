import React from "react";
import styles from "./contactheader.module.css";
import Image from "next/image";

import CPI from "../../../public/CP-header.png";
import theme from "@/app/theme";
import GeneralButton from "@/components/general-button/GeneralButton";
import GeneralButtonExternal from "@/components/general-button-external/GeneralButton";

function ContactHeader() {
  return (
    <div className={styles.container}>
      <Image src={CPI} alt={"bottom curve"} className={styles.image} />
      <div className={styles.rightContainer}>
        <h2
          className={styles.header}
          style={{ fontSize: theme.fontSizeXXLL, color: theme.dark }}
        >
          We’d love to talk.
        </h2>
        <p
          className={styles.description}
          style={{ fontSize: theme.fontSizeXS, color: theme.light }}
        >
          Reach out directly about your project, timing, and budget, or fill out
          our form below, and we’ll get in touch.
        </p>
        <div className={styles.buttonContainer}>
          <GeneralButtonExternal
            header={"Email Us"}
            buttonPath={"mailto:info@bordmedia.com"}
          />
          <GeneralButtonExternal
            header={"Call Us"}
            buttonPath="tel:+1234567890"
          />
        </div>
      </div>
    </div>
  );
}

export default ContactHeader;
