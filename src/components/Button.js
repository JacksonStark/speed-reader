import React from "react";
import classnames from "classnames";
import "./Button.scss";

export default function Button({ status, onClick }) {

  // const buttonClass = classnames("button", {
  //   "button--start": status === "Start",
  //   "button--stop": status === "Stop"
  // });

  return (
    <button
      className="button"
      onClick={onClick}
    >
      Start Reading
    </button>
  );
}
