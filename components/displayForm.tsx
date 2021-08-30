import React from "react";
import InputField from "./inputField";

export default function DisplayForm({ formElement, props }) {
  switch (formElement) {
    case "input": {
      return (
        <InputField content={props.content} inputHandler={props.inputHandler} />
      );
    }
    case "textarea":{
        
    }
  }
}
