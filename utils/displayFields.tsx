import InputField from "@components/inputField";
import TextArea from "@components/textArea";

export default function displayFields(formElement, inputHandler) {
  switch (formElement.type) {
    case "input": {
      return <InputField content={formElement} inputHandler={inputHandler} />;
    }
    case "textarea": {
      return <TextArea content={formElement} onChange={inputHandler} />;
    }
    default:
      return null;
  }
}
