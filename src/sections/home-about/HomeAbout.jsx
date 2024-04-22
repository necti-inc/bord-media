import React from "react";
import styles from "./homeabout.module.css";
import Image from "next/image";

import AboutImage from "../../../public/HP-about.png";
import theme from "@/app/theme";

function HomeAbout() {
  return (
    <div className={styles.container} style={{ backgroundColor: theme.alt }}>
      <Image src={AboutImage} alt={"Owner"} className={styles.aboutImage} />
      <div className={styles.textContainer}>
        <h3
          className={styles.header}
          style={{ fontSize: theme.fontSizeM, color: theme.dark }}
        >
          Melina Rushton
        </h3>
        <p
          className={styles.description}
          style={{ fontSize: theme.fontSizeXXS, color: theme.dark }}
        >
          Hello, I’m Melina, the heart and soul behind Bord Media, a Social
          Media Marketing company I founded with a passion for amplifying small
          businesses online. With a BAS in Clinical Psychology and a rich
          background in a social media influencer business focusing on
          merchandising and email/SMS marketing, I realized the immense impact
          of a strong digital presence. Bord Media was born from a desire to
          blend my expertise with a personal approach, helping small businesses
          not just grow but thrive in the digital world. It's about creating
          connections, understanding each client's unique story, and crafting
          strategies that make them shine online.{" "}
        </p>
      </div>
    </div>
  );
}

export default HomeAbout;
