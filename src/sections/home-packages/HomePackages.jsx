import React from "react";
import styles from "./homepackages.module.css";
import theme from "@/app/theme";
import Image from "next/image";

import PackageImage from "../../../public/HP-package.png";
import GeneralButton from "@/components/general-button/GeneralButton";

function HomePackages() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h3
          className={styles.header}
          style={{ fontSize: theme.fontSizeMS, color: theme.dark }}
        >
          Customer Packages
        </h3>
        <p
          className={styles.subHeader}
          style={{ fontSize: theme.fontSizeXS, color: theme.dark }}
        >
          Marketing, Branding, Photography
        </p>
        <p
          className={styles.description}
          style={{ fontSize: theme.fontSizeXXS, color: theme.light }}
        >
          Explore our tailored packages, complete with clear descriptions,
          examples, and pricing, crafted for your digital success.
        </p>
        <div className={styles.buttonContainer}>
          <GeneralButton header={"View Packages"} buttonPath={"/services"} />
        </div>
      </div>
      <Image src={PackageImage} alt={"Owner"} className={styles.packageImage} />
    </div>
  );
}

export default HomePackages;
