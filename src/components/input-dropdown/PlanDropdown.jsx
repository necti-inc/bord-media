"use client";

import React, { useEffect, useState } from "react";
import style from "./plandropdown.module.css";
import theme from "@/app/theme";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
const PlanDropdown = (props) => {
  // const currentPlan = props.value || "Please select...";
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState([
    props.value,
    500,
    theme.dark,
  ]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (plan, fontWeight, color) => {
    setSelectedPlan([plan, fontWeight, color]);
    setIsOpen(false);
    props.onChange && props.onChange(plan);
  };

  useEffect(() => {
    if (props.value === "reset") {
      setSelectedPlan(["$600 - $1,000", 500, theme.dark]);
    }
  }, [props.value]);

  return (
    <div className={style.container}>
      <label
        className={style.label}
        style={{ color: props.isValid ? theme.dark : theme.error }}
      >
        {props.title}
      </label>
      <div
        style={{ borderColor: theme.dark }}
        className={style.dropdown}
        onClick={toggleDropdown}
      >
        <p
          style={{
            color: selectedPlan[2],
            fontWeight: selectedPlan[1],
          }}
        >
          {selectedPlan[0]}
        </p>
        <span className={style.icon}>
          {isOpen ? (
            <FontAwesomeIcon style={{ color: theme.alt }} icon={faChevronUp} />
          ) : (
            <FontAwesomeIcon
              style={{ color: theme.alt }}
              icon={faChevronDown}
            />
          )}
        </span>
      </div>
      {isOpen && (
        <ul style={{ borderColor: theme.dark }} className={style.menu}>
          {props.items.map((item, index) => (
            <li
              key={index}
              onClick={() => handleOptionClick(item, 500, theme.dark)}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <p style={{ color: theme.dark }}>{item[0]}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PlanDropdown;
