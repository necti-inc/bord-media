import React from "react";
import styles from "./aboutmore.module.css";
import theme from "@/app/theme";
import Image from "next/image";

import LogoImage from "../../../public/AP-more-logo.png";

function AboutMore() {
  return (
    <div className={styles.container}>
      <Image src={LogoImage} alt={"Owner"} className={styles.logoImage} />
      <div className={styles.textContainer}>
        <div className={styles.leftContainer}>
          <p
            className={styles.description}
            style={{ fontSize: theme.fontSizeXXS, color: theme.dark }}
          >
            In the midst of 2020's global pause, the idea of Bord Media started
            to take shape in my mind. Watching businesses pivot online
            highlighted a glaring need for quality digital content that didn’t
            strain budgets.{" "}
          </p>
          <br />
          <p
            className={styles.description}
            style={{ fontSize: theme.fontSizeXXS, color: theme.dark }}
          >
            With determination and my BAS in Clinical Psychology, I turned my
            vision into Bord Media. Officially launched in June 2021, my company
            became a haven for small businesses seeking to strengthen their
            online presence. Specializing in social media marketing, Bord Media
            was my commitment to supporting female-led brands with a blend of
            psychological insight and marketing acumen.
          </p>
        </div>
        <div className={styles.rightContainer}>
          <p
            className={styles.description}
            style={{ fontSize: theme.fontSizeXXS, color: theme.dark }}
          >
            Through trials and feedback, the mission of Bord Media became clear:
            to forge creative and collaborative pathways in social media
            marketing. My approach has always been about more than just content;
            it's about connecting deeply with each brand, understanding their
            unique story, and sharing it with the world.
          </p>
          <br />
          <p
            className={styles.description}
            style={{ fontSize: theme.fontSizeXXS, color: theme.dark }}
          >
            Inspired by my love for minimalist and elegant designs, Bord Media
            embodies the principle that luxury can be accessible. Influenced by
            the chic of Paris and the simplicity of Scandinavia, I set out to
            show that sophistication and style aren't just for the
            well-established.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMore;
