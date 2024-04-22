import React from "react";
import styles from "./servicesdropdown.module.css";
import theme from "@/app/theme";
import DropdownFaq from "@/components/dropdown-faq/DropdownFaq";

function ServicesDropDown() {
  return (
    <div className={styles.container}>
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
        Social Strategies that Elevate as You Expand. Tailored Plans Starting at
        $400+
      </p>
      <div className={styles.divider} style={{ borderColor: theme.dark }} />
      <div>
        <DropdownFaq
          faqQuestion={"Base Package"}
          faqAnswer={
            <div style={{ fontSize: theme.fontSizeXXS }}>
              <p
                className={styles.bodyText}
                style={{
                  color: theme.secondary,
                  fontWeight: "600",
                }}
              >
                • 4 Posts/Month (1 Post/Week) With Captions
              </p>
              <p
                className={styles.bodyText}
                style={{
                  color: theme.light,
                }}
              >
                • Instagram/Facebook
              </p>
              <p className={styles.bodyText} style={{ color: theme.light }}>
                • Initial Business Social Media Setup/Organization
              </p>
              <p
                className={styles.bodyText}
                style={{
                  color: theme.light,
                }}
              >
                • Analysis of Accounts
              </p>
              <p
                className={styles.bodyText}
                style={{
                  color: theme.light,
                }}
              >
                • Post Scheduling
              </p>
              <p
                className={styles.bodyText}
                style={{
                  color: theme.light,
                }}
              >
                • Daily Engagement
              </p>
              <p
                className={styles.bodyText}
                style={{
                  color: theme.light,
                }}
              >
                • Monthly Analytics Report
              </p>
            </div>
          }
        />
        <DropdownFaq
          faqQuestion={"Premium Package"}
          faqAnswer={
            <div style={{ fontSize: theme.fontSizeXXS }}>
              <p
                className={styles.bodyText}
                style={{
                  color: theme.secondary,
                  fontWeight: "600",
                }}
              >
                • 8 Posts/Month (2 Posts/Week) With Captions
              </p>
              <p
                className={styles.bodyText}
                style={{
                  color: theme.light,
                }}
              >
                • Instagram/Facebook
              </p>
              <p className={styles.bodyText} style={{ color: theme.light }}>
                • Initial Business Social Media Setup/Organization
              </p>
              <p
                className={styles.bodyText}
                style={{
                  color: theme.light,
                }}
              >
                • Analysis of Accounts
              </p>
              <p
                className={styles.bodyText}
                style={{
                  color: theme.light,
                }}
              >
                • Post Scheduling
              </p>
              <p
                className={styles.bodyText}
                style={{
                  color: theme.light,
                }}
              >
                • Daily Engagement
              </p>
              <p
                className={styles.bodyText}
                style={{
                  color: theme.light,
                }}
              >
                • Monthly Analytics Report
              </p>
            </div>
          }
        />
        <DropdownFaq
          faqQuestion={"Additional Services"}
          faqAnswer={
            <div style={{ fontSize: theme.fontSizeXXS }}>
              <p className={styles.bodyText} style={{ color: theme.light }}>
                • Business Sales Taxes
              </p>
              <p
                className={styles.bodyText}
                style={{
                  color: theme.light,
                }}
              >
                • Email Marketing
              </p>
              <p className={styles.bodyText} style={{ color: theme.light }}>
                • Merchant Monday Posts
              </p>
              <p
                className={styles.bodyText}
                style={{
                  color: theme.light,
                }}
              >
                • Story Posts
              </p>
              <p
                className={styles.bodyText}
                style={{
                  color: theme.light,
                }}
              >
                • Additional Posts
              </p>
              <p
                className={styles.bodyText}
                style={{
                  color: theme.light,
                }}
              >
                • Google Workspace Email Setup
              </p>
              <p
                className={styles.bodyText}
                style={{
                  color: theme.light,
                }}
              >
                • Business Social Media Setup
              </p>
            </div>
          }
        />
      </div>
    </div>
  );
}

export default ServicesDropDown;
