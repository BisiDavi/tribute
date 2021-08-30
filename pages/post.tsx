import { ChangeEvent, useState } from "react";
import PageLayout from "@layout/pageLayout";

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
      <section className="Post">
        <h1>Post your experience with Prof.</h1>
        <h5>In Loving memory of Prof. A.A Akinpelumi</h5>

        <form onSubmit={submitHandler}>
          <input
            onChange={inputHandler}
            name="fullName"
            placeholder="Your Name"
          />
          <input
            onChange={inputHandler}
            name="email"
            placeholder="Your Email"
            type="email"
          />
          <textarea onChange={inputHandler} name="experience"></textarea>
          <button type="submit">Submit</button>
        </form>
      </section>
    </PageLayout>
  );
}
