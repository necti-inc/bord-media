import React from "react";
import styles from "./portfolioheader.module.css";
import theme from "@/app/theme";
import ProjectBox from "@/components/project-box/ProjectBox";
import IPP from "../../../public/PI-temp.png";
import ProjectBoxLarge from "@/components/project-box-large/ProjectBox";

function PortfolioHeader(props) {
  return (
    <div className={styles.container}>
      <h1
        className={styles.header}
        style={{ fontSize: theme.fontSizeXL, color: theme.dark }}
      >
        Digital Brilliance, Beautifully Engineered.
      </h1>
      <div className={styles.projectGrid}>
        {props.data.map((data, index) => (
          <ProjectBoxLarge
            key={index}
            image={data[2]}
            header={data[0]}
            description={data[1]}
          />
        ))}
      </div>
    </div>
  );
}

export default PortfolioHeader;
