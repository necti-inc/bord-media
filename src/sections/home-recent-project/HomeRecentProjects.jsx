import React from "react";
import styles from "./homerecentproject.module.css";
import theme from "@/app/theme";
import ProjectBox from "@/components/project-box/ProjectBox";

import IPP from "../../../public/PI-temp.png";
import Necti from "../../../public/PI-temp2.png";
import PremierIkon from "../../../public/PI-temp3.png";
import GeneralButton from "@/components/general-button/GeneralButton";
import GeneralButtonLight from "@/components/general-button/GeneralButton";

function HomeRecentProjects() {
  return (
    <div className={styles.container} style={{ backgroundColor: theme.tan }}>
      <h2
        className={styles.header}
        style={{ fontSize: theme.fontSizeM, color: theme.dark }}
      >
        Recent Projects
      </h2>
      <div className={styles.projectContainer}>
        <ProjectBox
          image={IPP}
          header={"Impact Pest Pros"}
          description={"Pest Control Marketing"}
        />
        <ProjectBox
          image={Necti}
          header={"Necti"}
          description={"Business Branding"}
        />
        <ProjectBox
          image={PremierIkon}
          header={"Premier Ikon"}
          description={"Social Marketing"}
        />
      </div>
      <GeneralButtonLight header={"More Projects"} buttonPath={"/portfolio"} />
    </div>
  );
}

export default HomeRecentProjects;
