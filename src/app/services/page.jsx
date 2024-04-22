import React from "react";
import ServicesHeader from "@/sections/services-header/ServicesHeader";
import ServicesWhatNeed from "@/sections/services-what-need/ServicesWhatNeed";
import ServicesDropDown from "@/sections/services-drop-down/ServicesDropDown";

function Services() {
  return (
    <div>
      <ServicesHeader />
      {/*<ServicesWhatNeed />*/}
      <ServicesDropDown />
    </div>
  );
}

export default Services;
