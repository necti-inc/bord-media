import React from "react";
import PortfolioHeader from "@/sections/portfolio-header/PortfolioHeader";

import IPP from "../../../public/PI-temp.png";
import MP from "../../../public/PI-temp2.png";
import CC from "../../../public/PI-temp3.png";
import SSP from "../../../public/PI-temp4.png";
import N from "../../../public/PI-temp5.png";
import IS from "../../../public/PI-temp6.png";

function Portfolio() {
  const data = [
    ["Impact Pest Pros", "Social Media Management", IPP],
    ["Ike's Subs", "Social Marketing", IS],
    ["Socal Solar Pros", "Social Media Management", SSP],
    ["Necti", "Social Media Management", N],
    ["Maggie's Pies", "Business Development", MP],
    ["Claire's Cookies", "Social Marketing", CC],
  ];

  return (
    <div>
      <PortfolioHeader data={data} />
    </div>
  );
}

export default Portfolio;
