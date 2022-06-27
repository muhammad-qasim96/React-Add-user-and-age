import React from "react";
import style from "./Button.module.css";

export const Button = (props) => {
  return (
    <button
      type={props.type || "button"}
      onClick={props.onClick}
      className={style.button}
    >
      {props.children}
    </button>
  );
};
