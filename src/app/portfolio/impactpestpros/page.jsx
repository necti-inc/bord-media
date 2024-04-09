import React from "react";
import styles from "@/sections/services-header/servicesheader.module.css";
import theme from "@/app/theme";

function Page() {
  return (
    <div className={styles.container}>
      <h2
        className={styles.subHeader}
        style={{ fontSize: theme.fontSizeXS, color: theme.light }}
      >
        Impact Pest pros
      </h2>
      <h1
        className={styles.header}
        style={{ fontSize: theme.fontSizeL, color: theme.dark }}
      >
        Elevated Impact Pest Pros' presence with bespoke Social Media
        Management. We catapulted their digital footprint, growing platforms to
        buzzing hubs of engagement.
      </h1>
    </div>
  );
}

export default Page;
