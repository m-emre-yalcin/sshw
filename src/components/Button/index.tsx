import * as React from "react";
import "./style.scss";

export const Button = (props: ButtonProps) => {
  return (
    <div
      className="button-container"
      style={{ textAlign: props.center ? "center" : "left" }}
      onClick={() => props.onClick()}
    >
      <button>{props.children}</button>
    </div>
  );
};

interface ButtonProps {
  children: any;
  onClick?: any;
  center?: boolean;
}

export default Button;
