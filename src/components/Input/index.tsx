import * as React from "react";
import "./style.scss";

export const Input = (props: InputProps) => {
  return (
    <div className="input-container">
      <label htmlFor={props.name}>{props.name}</label>
      <input
        type={props.type}
        name={props.name}
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
      />
    </div>
  );
};

interface InputProps {
  name: string;
  type: "text" | "password";
  value: any;
  onChange?: any;
}

export default Input;
