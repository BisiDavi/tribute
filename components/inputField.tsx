import React from "react";

export default function InputField({ content, ...props }: InputFieldProps) {
  return (
    <div className="inputGroup">
      <label>{content.label}</label>
      <input
        onChange={props.inputHandler}
        name={content.name}
        placeholder={content.placeholder}
      />
    </div>
  );
}

interface InputFieldProps {
  inputHandler: () => void;
  content: {
    name: string;
    placeholder: string;
    label: string;
  };
}
