import InputField from "@components/inputField";
import TextArea from "@components/textArea";

export default function displayFields(formElement, inputHandler) {
  switch (formElement.type) {
    case "input": {
      return (
        <InputField
          key={formElement.name}
          content={formElement}
          inputHandler={inputHandler}
        />
      );
    }
    case "textarea": {
      return (
        <TextArea
          key={formElement.name}
          content={formElement}
          onChange={inputHandler}
        />
      );
    }
    default:
      return null;
  }
}
