import React, { ChangeEvent, useState } from "react";
import formContent from "@json/post.json";
import displayFields from "@utils/displayFields";

export default function PostForm() {
  const [post, setPost] = useState({
    fullName: "",
    email: "",
    experience: "",
  });

  console.log("post", post);

  function inputHandler(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
  }

  function submitHandler(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("post", post);
  }

  return (
    <>
      <form className="postForm" onSubmit={submitHandler}>
        {formContent.map((formElement, index) =>
          displayFields(formElement, inputHandler)
        )}
        <button type="submit">Submit</button>
      </form>
      <style jsx>
        {`
          .postForm {
            display: flex;
            margin: auto;
            justify-content: center;
            flex-direction: column;
            padding: 50px;
            border-radius: 5px;
            border: 1px solid black;
            width: 30%;
            align-items: flex-start;
          }
        `}
      </style>
    </>
  );
}
