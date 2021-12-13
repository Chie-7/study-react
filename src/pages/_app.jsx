import React, { useEffect, useState } from "react";
import "../styles/globals.css";
// import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const [state] = useState();
  useEffect(() => {
    if (state) return;
  }, [state]);
  return <Component {...pageProps} />;
}

export default MyApp;
