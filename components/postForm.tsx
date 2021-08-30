import React, { ChangeEvent, useState } from "react";
import formContent from "@json/post.json";
import displayFields from "@utils/displayFields";
import Spinner from "@components/spinner";
import axiosInstance from "@network/axiosInstance";

export default function PostForm() {
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState({
    fullName: "",
    email: "",
    post: "",
  });

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
    setLoading(true);
    console.log("I am working");
    axiosInstance
      .post("/post", post)
      .then((response) => {
        console.log("response", response);
        setLoading(false);
      })
      .catch((error) => {
        console.error("error", error);
        setLoading(false);
      });
  }

  console.log("loading", loading);

  return (
    <>
      {loading && <Spinner />}
      <form className="postForm" onSubmit={submitHandler}>
        {formContent.map((formElement) =>
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
