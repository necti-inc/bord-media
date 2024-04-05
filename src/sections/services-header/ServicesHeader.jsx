import React from "react";
import styles from "./servicesheader.module.css";
import Image from "next/image";
import SocialImage from "../../../public/SP-social-management.png";
import theme from "@/app/theme";

function ServicesHeader() {
  return (
    <div className={styles.container}>
      <h2
        className={styles.subHeader}
        style={{ fontSize: theme.fontSizeXS, color: theme.light }}
      >
        Social Media Management
      </h2>
      <h1
        className={styles.header}
        style={{ fontSize: theme.fontSizeXLL, color: theme.dark }}
      >
        90% of Businesses Thrive with Social Media Management. Let's Elevate
        Yours to Unforgettable.
      </h1>
      <Image src={SocialImage} alt={"Owner"} className={styles.socialImage} />
    </div>
  );
}

export default ServicesHeader;
