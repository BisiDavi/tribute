import { useState, useEffect } from "react";
import Router from "next/router";
import Loading from "@components/loading";
import "../styles/globals.css";
import "nprogress/nprogress.css";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.on("routeChangeStart", start);
      Router.events.on("routeChangeComplete", end);
      Router.events.on("routeChangeError", end);
    };
  }, []);

  return (
    <>
      {loading && <Loading />}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
