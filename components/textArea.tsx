import React from "react";

export default function TextArea({ content, ...props }: InputFieldProps) {
  return (
    <>
      <div className="inputGroup">
        <label>{content.label}</label>
        <textarea
          onChange={props.onChange}
          placeholder={content.placeholder}
          name={content.name}
        ></textarea>
      </div>
      <style jsx>
        {`
          .inputGroup {
            display: flex;
            flex-direction: column;
          }
          .inputGroup label {
            font-size: 16px;
          }
          .inputGroup textarea {
            width: 100%;
            height: 100px;
          }
        `}
      </style>
    </>
  );
}

interface InputFieldProps {
  onChange: () => void;
  content: {
    name: string;
    placeholder: string;
    label: string;
  };
}
