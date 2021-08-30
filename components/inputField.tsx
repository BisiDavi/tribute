import React from "react";

export default function InputField({ content, ...props }: InputFieldProps) {
  return (
    <>
      <div className="inputGroup">
        <label>{content.label}</label>
        <input
          onChange={props.inputHandler}
          name={content.name}
          placeholder={content.placeholder}
          required
        />
      </div>
      <style jsx>
        {`
          .inputGroup {
            display: flex;
            flex-direction: column;
            width: 100%;
          }
          .inputGroup label {
            font-size: 16px;
          }
          .inputGroup input {
            width: 100%;
            margin: 20px 0px;
            height: 40px;
            border-radius: 5px;
            border: 1px solid black;
            padding: 20px;
          }
        `}
      </style>
    </>
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
