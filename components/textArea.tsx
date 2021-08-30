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
          required
        ></textarea>
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
          .inputGroup textarea {
            margin: 20px 0px;
            width: 100%;
            height: 100px;
            padding: 20px;
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
