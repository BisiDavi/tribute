import { ChangeEvent, useState } from "react";
import PageLayout from "@layout/pageLayout";
import InputField from "@components/inputField";
import formContent from "@json/post.json";

export default function Post() {
  const [post, setPost] = useState({
    fullName: "",
    email: "",
    experience: "",
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
    console.log("post", post);
  }
  return (
    <PageLayout title="Post">
      <>
        <section className="Post">
          <h1>Post your experience with Prof.</h1>
          <h5>In Loving memory of Prof. A.A Akinpelumi</h5>

          <form onSubmit={submitHandler}>
            <InputField content={content} inputHandler={inputHandler} />
            <div className="inputGroup">
              <label>Your Full Name</label>
              <input
                onChange={inputHandler}
                name="fullName"
                placeholder="Your Name"
              />
            </div>
            <input
              onChange={inputHandler}
              name="email"
              placeholder="Your Email"
              type="email"
            />
            <textarea
              onChange={inputHandler}
              placeholder="Your experience with Prof."
              name="experience"
            ></textarea>
            <button type="submit">Submit</button>
          </form>
        </section>
        <style jsx>
          {`
            section.Post form {
              display: flex;
              align-items: center;
              margin: auto;
              justify-content: center;
              flex-direction: column;
              padding: 50px;
              border-radius: 5px;
              border: 1px solid black;
            }
            section.Post {
              display: flex;
              flex-direction: column;
              margin: auto;
              justify-content: center;
              align-items: center;
            }
            section form textarea {
              width: 100%;
              height: 100px;
            }

            section form input {
              width: 100%;
              margin: 20px;
              height: 40px;
              border-radius: 5px;
              border: 1px solid black;
              padding: 20px;
            }
          `}
        </style>
      </>
    </PageLayout>
  );
}
