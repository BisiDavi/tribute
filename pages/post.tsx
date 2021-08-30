import React, { useState } from "react";
import PageLayout from "@layout/pageLayout";
import PostForm from "@components/postForm";

export default function Post() {
  return (
    <PageLayout title="Post">
      <>
        <section className="Post">
          <h1>Post your experience with Prof.</h1>
          <h5>In Loving memory of Prof. A.A Akinpelumi</h5>
          <PostForm />
        </section>
        <style jsx>
          {`
            section.Post {
              display: flex;
              flex-direction: column;
              margin: auto;
              justify-content: center;
              align-items: center;
            }
          `}
        </style>
      </>
    </PageLayout>
  );
}
