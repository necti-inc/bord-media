"use client";

import React, { useState, useEffect } from "react";
import style from "./largetextinput.module.css";
import theme from "@/app/theme";

function XLargeTextInput(props) {
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    setInputValue(props.value);
    if (props.value === "reset") {
      setInputValue("");
      setIsTyping(false);
    }
  }, [props.value]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    if (e.target.value) {
      setIsTyping(true);
    } else {
      setIsTyping(false);
    }
  };

  return (
    <div className={style.container}>
      <label
        style={{ color: props.isValid ? theme.dark : theme.error }}
        className={style.label}
      >
        {props.title}
      </label>
      <textarea
        style={{
          fontWeight: isTyping ? 500 : 400,
          borderColor: theme.secondary,
          fontFamily: "inherit",
          color: theme.dark,
        }}
        className={style.input}
        id={props.title}
        placeholder={props.placeholder}
        value={inputValue}
        onChange={(e) => {
          handleInputChange(e);
          props.onChange && props.onChange(e);
        }}
        required={props.required}
      />
    </div>
  );
}

export default XLargeTextInput;
