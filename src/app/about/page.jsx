import React from "react";
import AboutHeader from "@/sections/about-header/AboutHeader";
import AboutFounder from "@/sections/about-founder/AboutFounder";
import AboutCta from "@/sections/about-cta/AboutCta";
import AboutMore from "@/sections/about-more/AboutMore";

function About() {
  return (
    <div>
      <AboutHeader />
      <AboutFounder />
      <AboutCta />
      <AboutMore />
    </div>
  );
}

export default About;
