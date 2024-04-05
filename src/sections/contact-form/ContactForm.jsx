"use client";

import React, { useState, useRef } from "react";
import axios from "axios";
import styles from "./contact-form.module.css";
import theme from "@/app/theme";
import SmallTextInput from "@/components/input-text-small/SmallTextInput";
import LargeTextInput from "@/components/input-text-large/LargeTextInput";
import PlanDropdown from "@/components/input-dropdown/PlanDropdown";
import Image from "next/image";
import XLargeTextInput from "@/components/input-text-Xlarge/LargeTextInput";
import InputSelect from "@/components/input-select/InputSelect";

function ContactForm() {
  const [fullNameValue, setFullNameValue] = useState(["", true]);
  const [businessNameValue, setBusinessNameValue] = useState(["", true]);
  const [emailValue, setEmailValue] = useState(["", true]);
  const [phoneValue, setPhoneValue] = useState(["", true]);
  const [estimatedBudget, setEstimatedBudget] = useState("$600 - $1,000");
  const [servicesValue, setServicesValue] = useState([[], true]);
  const [anythingElseValue, setAnythingElseValue] = useState(["", true]);

  const [isHovered, setIsHovered] = useState(false);

  const estimatedBudgetValues = [
    ["$600 - $1,000", ""],
    ["$1,000 - $2,000", ""],
    ["$2,000 - $4,000", ""],
  ];
  const options1 = [
    ["Meta Management"],
    ["Business Naming"],
    ["Brand Strategy"],
    ["Creative Content"],
  ];
  const options2 = [
    ["Business Photoshoot"],
    ["Yelp Management"],
    ["Next Door Management"],
    ["Creative Content"],
  ];

  const buttonstyles = {
    borderColor: isHovered ? theme.secondary : theme.alt,
    color: isHovered ? theme.secondary : theme.alt,
    transition: "background-color 0.3s, color 0.3s",
  };

  const isValidEmail = (email) => {
    // Simple regex for email validation
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let isValid = true;

    // Check first name
    if (!fullNameValue[0].trim()) {
      setFullNameValue([fullNameValue[0], false]);
      isValid = false;
    }

    // Check last name
    if (!businessNameValue[0].trim()) {
      setBusinessNameValue([businessNameValue[0], false]);
      isValid = false;
    }

    // Check email (both for emptiness and valid format)
    if (!emailValue[0].trim() || !isValidEmail(emailValue[0])) {
      setEmailValue([emailValue[0], false]);
      isValid = false;
    }

    if (!phoneValue[0].trim()) {
      setPhoneValue([phoneValue[0], false]);
      isValid = false;
    }

    if (servicesValue[0].length === 0) {
      setServicesValue([servicesValue[0], false]);
      isValid = false;
    }

    // If everything is valid, continue with submission
    if (isValid) {
      const formData = {
        fullName: fullNameValue[0],
        businessName: businessNameValue[0],
        email: emailValue[0],
        phoneNumber: phoneValue[0],
        estimatedBudget: estimatedBudget,
        services: servicesValue[0],
        anythingElse: anythingElseValue[0],
      };

      try {
        await axios.post(
          "https://us-central1-bord-media.cloudfunctions.net/contact-form-automation",
          formData
        );

        setFullNameValue(["reset", true]);
        setBusinessNameValue(["reset", true]);
        setEmailValue(["reset", true]);
        setPhoneValue(["reset", true]);
        setEstimatedBudget("reset");
        setServicesValue(["reset", true]);
        setAnythingElseValue(["reset", true]);
      } catch (error) {
        console.error("Error calling Cloud Function:", error);
      }
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.rightContainerWeb}>
        <h2
          className={styles.contactHeader}
          style={{ color: theme.dark, fontSize: theme.fontSizeXL }}
        >
          Tell us about you.
        </h2>
        <div>
          <p style={{ color: theme.light }} className={styles.warningText}>
            “*” indicates required fields
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className={styles.topContainer}>
            <SmallTextInput
              title={"Full Name *"}
              placeholder={"John Smith"}
              type={"text"}
              value={fullNameValue[0]}
              onChange={(e) => setFullNameValue([e.target.value, true])}
              isValid={fullNameValue[1]}
            />
            <SmallTextInput
              title={"Business/Project Name *"}
              placeholder={"J's Pest Control"}
              type={"text"}
              value={businessNameValue[0]}
              onChange={(e) => setBusinessNameValue([e.target.value, true])}
              isValid={businessNameValue[1]}
            />
          </div>
          <div className={styles.bottomContainer}>
            <LargeTextInput
              title={"Email *"}
              placeholder={"john@gmail.com"}
              type={"email"}
              value={emailValue[0]}
              onChange={(e) => setEmailValue([e.target.value, true])}
              isValid={emailValue[1]}
            />
            <LargeTextInput
              title={"Phone *"}
              placeholder={"951-568-9856"}
              value={phoneValue[0]}
              onChange={(e) => setPhoneValue([e.target.value, true])}
              isValid={phoneValue[1]}
            />
            <PlanDropdown
              value={estimatedBudget}
              title={"Estimated Budget *"}
              onChange={(plan) => setEstimatedBudget(plan)}
              items={estimatedBudgetValues}
              isValid={true}
            />
          </div>
          <div
            style={{ display: "flex", marginTop: "20px", marginBottom: "20px" }}
          >
            <InputSelect
              title={"Services (Check all that apply.) *"}
              options={options1}
              value={servicesValue[0]}
              onChange={(selectedServices) =>
                setServicesValue([selectedServices, true])
              }
              isValid={servicesValue[1]}
            />
            <InputSelect
              title={<br />}
              options={options2}
              onChange={(selectedServices) =>
                setServicesValue([selectedServices, true])
              }
              isValid={servicesValue[1]}
            />
          </div>
          <XLargeTextInput
            title={"Additional Info"}
            placeholder={"Get Started..."}
            value={anythingElseValue[0]}
            onChange={(e) => setAnythingElseValue([e.target.value, true])}
            isValid={anythingElseValue[1]}
          />
          <div className={styles.buttonContainer}>
            <button
              // style={{
              //   fontSize: theme.fontSizeXXS,
              //   color: theme.alt,
              //   borderColor: theme.alt,
              // }}
              style={buttonstyles}
              className={styles.buttonDark}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      <div className={styles.rightContainerMobile}>
        <form onSubmit={handleSubmit}>
          <LargeTextInput
            title={"First name *"}
            placeholder={"John"}
            type={"text"}
            value={fullNameValue[0]}
            onChange={(e) => setFullNameValue([e.target.value, true])}
            isValid={fullNameValue[1]}
          />
          <LargeTextInput
            title={"Last name *"}
            placeholder={"Smith"}
            type={"text"}
            value={businessNameValue[0]}
            onChange={(e) => setBusinessNameValue([e.target.value, true])}
            isValid={businessNameValue[1]}
          />
          <LargeTextInput
            title={"Email *"}
            placeholder={"johnsmith@gmail.com"}
            type={"email"}
            value={emailValue[0]}
            onChange={(e) => setEmailValue([e.target.value, true])}
            isValid={emailValue[1]}
          />
          <div className={styles.bottomContainer}>
            <PlanDropdown
              value={estimatedBudget}
              title={"Solution Package"}
              onChange={(plan) => setEstimatedBudget(plan)}
              items={estimatedBudgetValues}
            />
            <LargeTextInput
              title={"Anything else?"}
              placeholder={"I need a nice website."}
              value={anythingElseValue[0]}
              onChange={(e) => setAnythingElseValue([e.target.value, true])}
              isValid={anythingElseValue[1]}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
