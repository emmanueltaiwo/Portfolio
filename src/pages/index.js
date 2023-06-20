import React, { useEffect, useState } from "react";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import HomeMain from "@/components/Main/HomeMain";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <>
      <Head>
        <title>Emmanuel Taiwo - Software Engineer</title>
        <meta name="description" content="Emmanuel Taiwo - Software Engineer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div>
        <>
          <Header />
          <HomeMain />
          <Footer />
        </>
      </div>
    </>
  );
}
