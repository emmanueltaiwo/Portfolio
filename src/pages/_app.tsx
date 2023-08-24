import "../styles/globals.css";
import { AppProps } from "next/app";
import React, { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
}
