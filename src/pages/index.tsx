import React, { useState } from "react";
import Layout from "../components/Layout";
import Head from "next/head";
import LandingPage from "../components/Home/landingPage";
import ScrollDetector from "../components/UI/scrollDetector";
import AboutSection from "../components/Home/aboutSection";
import ProjectSection from "../components/Home/projectSection";
import dynamic from "next/dynamic";

export default function Home() {
  const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
    ssr: false,
  });

  const [userHasScroll, setUserHasScroll] = useState(false);

  const handleUserScroll = (hasScroll: boolean) => {
    setUserHasScroll(hasScroll);
  };

  return (
    <>
      <Head>
        <title>Emmanuel Taiwo - Frontend Developer</title>
        <meta
          name="description"
          content="Emmanuel Taiwo - Frontend Developer"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://realemmanuel.vercel.app/" />
        <meta
          property="og:title"
          content="Emmanuel Taiwo - Frontend Developer"
        />
        <meta
          property="og:description"
          content="Emmanuel Taiwo - Frontend Developer"
        />
        <meta property="og:image" content="/favicon.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://twitter.com/thedevemmanuel"
        />
        <meta
          property="twitter:title"
          content="Emmanuel Taiwo - Frontend Developer"
        />
        <meta
          property="twitter:description"
          content="Emmanuel Taiwo - Frontend Developer"
        />
        <meta property="twitter:image" content="/favicon.png" />

        {/* Robots */}
        <meta name="robots" content="index, follow" />

        {/* Language */}
        <meta name="language" content="English" />

        {/* Author */}
        <meta name="author" content="Emmanuel Taiwo" />

        {/* Keywords */}
        <meta
          name="keywords"
          content="emmanuel, emmanuel taiwo, emmanuel taiwo oluwafunso, frontend developer, web development, React, JavaScript, software engineer"
        />
      </Head>
      <AnimatedCursor
        innerSize={8}
        outerSize={5}
        color="0, 3, 255"
        outerAlpha={5}
        innerScale={5}
        outerScale={5}
        clickables={[
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />

      <Layout userHasScroll={userHasScroll}>
        <ScrollDetector onScroll={handleUserScroll} />
        <LandingPage />
        <AboutSection />
        <ProjectSection />
      </Layout>
    </>
  );
}
