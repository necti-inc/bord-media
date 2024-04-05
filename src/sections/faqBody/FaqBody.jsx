import React from "react";
import styles from "./faqbody.module.css";
import DropdownFaq from "@/components/dropdown-faq/DropdownFaq";
import theme from "@/app/theme";

function FaqBody() {
  return (
    <div className={styles.container}>
      <div className={styles.faqOne}>
        <h2
          className={styles.header}
          style={{ fontSize: theme.fontSizeXLL, color: theme.dark }}
        >
          Social Management
        </h2>
        <p
          className={styles.description}
          style={{ fontSize: theme.fontSizeXXS, color: theme.light }}
        >
          Social Strategies that Elevate as You Expand. Tailored Plans Starting
          at $600+
        </p>
        <div className={styles.divider} style={{ borderColor: theme.dark }} />
        <div>
          <DropdownFaq
            faqQuestion={"Meta Management"}
            faqAnswer={
              <div style={{ fontSize: theme.fontSizeXXS }}>
                <p
                  className={styles.headerText}
                  style={{
                    color: theme.dark,
                  }}
                >
                  Weekly Content Cadence:
                </p>
                <br />
                <p
                  className={styles.bodyText}
                  style={{
                    color: theme.light,
                  }}
                >
                  • 3 Posts: Carefully crafted to engage and captivate,
                  alternating every other day for consistent presence. <br /> •
                  2 Stories: Dynamic stories every week to connect and interact,
                  keeping your brand top of mind.
                </p>
                <br />
                <br />
                <p className={styles.headerText} style={{ color: theme.dark }}>
                  Engagement Boost:
                </p>
                <br />
                <p
                  className={styles.bodyText}
                  style={{
                    color: theme.light,
                  }}
                >
                  • Social Interaction: Active participation in conversations to
                  foster community and enhance visibility.
                </p>
                <br />
                <br />
                <p className={styles.headerText} style={{ color: theme.dark }}>
                  Your Benefits:
                </p>
                <br />
                <p
                  className={styles.bodyText}
                  style={{
                    color: theme.light,
                  }}
                >
                  • Steady Growth: A balanced mix of posts and stories to
                  steadily grow your audience.
                  <br /> • Brand Presence: Regular, high-quality content to
                  elevate your brand's digital footprint.
                </p>
              </div>
            }
          />
          <DropdownFaq
            faqQuestion={"Yelp Management"}
            faqAnswer={
              <div style={{ fontSize: theme.fontSizeXXS }}>
                <p
                  className={styles.headerText}
                  style={{
                    color: theme.dark,
                  }}
                >
                  Weekly Content Cadence:
                </p>
                <br />
                <p
                  className={styles.bodyText}
                  style={{
                    color: theme.light,
                  }}
                >
                  • 3 Posts: Carefully crafted to engage and captivate,
                  alternating every other day for consistent presence. <br /> •
                  2 Stories: Dynamic stories every week to connect and interact,
                  keeping your brand top of mind.
                </p>
                <br />
                <br />
                <p className={styles.headerText} style={{ color: theme.dark }}>
                  Engagement Boost:
                </p>
                <br />
                <p
                  className={styles.bodyText}
                  style={{
                    color: theme.light,
                  }}
                >
                  • Social Interaction: Active participation in conversations to
                  foster community and enhance visibility.
                </p>
                <br />
                <br />
                <p className={styles.headerText} style={{ color: theme.dark }}>
                  Your Benefits:
                </p>
                <br />
                <p
                  className={styles.bodyText}
                  style={{
                    color: theme.light,
                  }}
                >
                  • Steady Growth: A balanced mix of posts and stories to
                  steadily grow your audience.
                  <br /> • Brand Presence: Regular, high-quality content to
                  elevate your brand's digital footprint.
                </p>
              </div>
            }
          />
          <DropdownFaq
            faqQuestion={"Next Door Management"}
            faqAnswer={
              <div style={{ fontSize: theme.fontSizeXXS }}>
                <p
                  className={styles.headerText}
                  style={{
                    color: theme.dark,
                  }}
                >
                  Weekly Content Cadence:
                </p>
                <br />
                <p
                  className={styles.bodyText}
                  style={{
                    color: theme.light,
                  }}
                >
                  • 3 Posts: Carefully crafted to engage and captivate,
                  alternating every other day for consistent presence. <br /> •
                  2 Stories: Dynamic stories every week to connect and interact,
                  keeping your brand top of mind.
                </p>
                <br />
                <br />
                <p className={styles.headerText} style={{ color: theme.dark }}>
                  Engagement Boost:
                </p>
                <br />
                <p
                  className={styles.bodyText}
                  style={{
                    color: theme.light,
                  }}
                >
                  • Social Interaction: Active participation in conversations to
                  foster community and enhance visibility.
                </p>
                <br />
                <br />
                <p className={styles.headerText} style={{ color: theme.dark }}>
                  Your Benefits:
                </p>
                <br />
                <p
                  className={styles.bodyText}
                  style={{
                    color: theme.light,
                  }}
                >
                  • Steady Growth: A balanced mix of posts and stories to
                  steadily grow your audience.
                  <br /> • Brand Presence: Regular, high-quality content to
                  elevate your brand's digital footprint.
                </p>
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
}

export default FaqBody;
