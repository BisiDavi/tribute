import React from "react";

export default function Loading() {
  return (
    <>
      <div className="loading">
        <h1>In Loving Memory of Prof. A. A Akinpelumi | Loading...</h1>
      </div>
      <style jsx>
        {`
          .loading {
            height: 100%;
            display: flex;
            position: absolute;
            z-index: 100;
            left: 0;
            top: 0;
            width: 100%;
            color: white;
            justify-content: center;
            align-items: center;
            background-color: #bb452ab5;
          }
        `}
      </style>
    </>
  );
}
