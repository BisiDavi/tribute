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

  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
    body: JSON.stringify(post),
  };

  function submitHandler(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    fetch("/api/post", options)
      .then((response) => {
        console.log("response", response);
      })
      .catch((error) => {
        console.error("error", error);
      });
  }

  return (
    <>
      <form className="postForm" onSubmit={submitHandler}>
        {formContent.map((formElement, index) =>
          displayFields(formElement, inputHandler)
        )}
        <button className="submit" type="submit">
          Submit
        </button>
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
          button.submit {
            width: 80%;
            height: 40px;
            background-color: black;
            color: white;
            font-weight: bold;
            font-size: 20px;
            border: none;
            border-radius: 5px;
            margin: auto;
            cursor: pointer;
          }
        `}
      </style>
    </>
  );
}
