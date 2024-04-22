import theme from "@/app/theme";
import React from "react";
import styles from "./footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebookF,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Footer = () => {
  return (
    <div
      className={styles.container}
      style={{ backgroundColor: theme.alt, color: theme.secondary }}
    >
      <h3 className={styles.header} style={{ fontSize: theme.fontSizeXXL }}>
        Let’s Get To Work!
      </h3>
      <div className={styles.outerTextContainer}>
        <div className={styles.innerTextContainer}>
          <div className={styles.topContainer}>
            <a href={"tel:+1234567890"}>
              <p
                className={styles.textButton}
                style={{ fontSize: theme.fontSizeXXS }}
              >
                +1 (951) 796-7321
              </p>
            </a>
            <a href="mailto:info@bordmedia.com">
              <p
                className={styles.textButton}
                style={{ fontSize: theme.fontSizeXXS }}
              >
                info@bordmedia.com
              </p>
            </a>
          </div>
          <div
            className={styles.middleContainer}
            style={{ fontSize: theme.fontSizeXXS }}
          >
            <Link href={"/about"}>
              <p className={styles.texterButton}>About</p>
            </Link>
            <Link href={"/portfolio"}>
              <p className={styles.texterButton}>Portfolio</p>
            </Link>
            <Link href={"/services"}>
              <p className={styles.texterButton}>Services</p>
            </Link>
          </div>
        </div>
        <div
          className={styles.bottomContainer}
          style={{ fontSize: theme.fontSizeXXS }}
        >
          <p>
            Shaping your digital journey with meticulous design, vibrant
            personality, and unmistakable flair, every step of the way.
          </p>
        </div>
      </div>
      <div className={styles.outerTextContainerMobile}>
        <p className={styles.topTextMobile}>
          Shaping your digital journey with meticulous design, vibrant
          personality, and unmistakable flair, every step of the way.
        </p>
        <div className={styles.middleButtonMobile}>
          <a href={"tel:+1234567890"}>
            <p
              className={styles.textButton}
              style={{ fontSize: theme.fontSizeXXS }}
            >
              +1 (951) 796-7321
            </p>
          </a>
          <a href="mailto:info@bordmedia.com">
            <p
              className={styles.textButton}
              style={{ fontSize: theme.fontSizeXXS }}
            >
              info@bordmedia.com
            </p>
          </a>
        </div>
        <Link href={"/about"}>
          <p className={styles.texterButton}>About</p>
        </Link>
        <Link href={"/portfolio"}>
          <p className={styles.texterButton}>Portfolio</p>
        </Link>
        <Link href={"/services"}>
          <p className={styles.texterButton}>Services</p>
        </Link>
      </div>
      <div className={styles.cityText}>
        <p>Temecula, CA</p>
      </div>
      <div className={styles.iconContainer}>
        <a href={"https://www.instagram.com/bord.media/"}>
          <FontAwesomeIcon
            className={styles.iconsTall}
            style={{ color: theme.secondary }}
            icon={faFacebookF}
          />
        </a>
        <a href={"https://www.instagram.com/bord.media/"}>
          <FontAwesomeIcon
            className={styles.icons}
            style={{ color: theme.secondary }}
            icon={faInstagram}
          />
        </a>
        <a href={"https://www.instagram.com/bord.media/"}>
          <FontAwesomeIcon
            className={styles.icons}
            style={{ color: theme.secondary }}
            icon={faLinkedinIn}
          />
        </a>
      </div>
      <div className={styles.lowerContainer}>
        <p>
          ©2024 BORD MEDIA &nbsp; // &nbsp; POWERED BY{" "}
          <a
            href={"https://necti.io/"}
            target={"_blank"}
            className={styles.texterButton}
          >
            NECTI
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
