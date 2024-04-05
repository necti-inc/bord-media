"use client";
import React, { useState } from "react";
import styles from "./inputselect.module.css";
import theme from "@/app/theme";

function InputSelect(props) {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionChange = (optionValue) => {
    setSelectedOptions((currentSelectedOptions) => {
      let newSelectedOptions;
      if (currentSelectedOptions.includes(optionValue)) {
        newSelectedOptions = currentSelectedOptions.filter(
          (option) => option !== optionValue
        );
      } else {
        newSelectedOptions = [...currentSelectedOptions, optionValue];
      }
      props.onChange && props.onChange(newSelectedOptions);
      return newSelectedOptions;
    });
  };

  return (
    <div className={styles.container}>
      <label
        style={{ color: props.isValid ? theme.dark : theme.error }}
        className={styles.label}
      >
        {props.title}
      </label>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {props.options.map((option, index) => (
          <li
            key={index}
            style={{
              marginBottom: "10px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <input
              type="checkbox"
              id={option[0]}
              checked={selectedOptions.includes(option[0])}
              onChange={() => handleOptionChange(option[0])}
            />
            <label
              htmlFor={option[0]}
              className={styles.selectInput}
              style={{
                color: selectedOptions.includes(option[0])
                  ? theme.alt
                  : theme.light,
              }}
            >
              {option[0]}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default InputSelect;
