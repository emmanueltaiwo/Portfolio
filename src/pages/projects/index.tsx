import React, { useState } from "react";
import ScrollDetector from "../../components/UI/scrollDetector";
import Layout from "../../components/Layout";
import AllProjects from "../../components/Projects/allProjects";
import Head from "next/head";
import dynamic from "next/dynamic";

const Projects = () => {
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
        <title>Emmanuel Taiwo - Frontend Developer - Projects</title>
        <meta
          name="description"
          content="Emmanuel Taiwo - Frontend Developer - Projects"
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
          content="https://realemmanuel.vercel.app/"
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

        {/* Canonical URL */}
        <link rel="canonical" href="https://realemmanuel.vercel.app/" />

        {/* Robots */}
        <meta name="robots" content="index, follow" />

        {/* Language */}
        <meta name="language" content="English" />

        {/* Author */}
        <meta name="author" content="Emmanuel Taiwo" />

        {/* Keywords */}
        <meta
          name="keywords"
          content="frontend developer, web development, React, JavaScript, software engineer"
        />

        {/* Google Site Verification */}
        <meta
          name="google-site-verification"
          content="your-google-site-verification-code"
        />

        {/* Bing Site Verification */}
        <meta name="msvalidate.01" content="your-bing-site-verification-code" />

        {/* Apple Touch Icons */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />

        {/* PWA Settings */}
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
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
        <AllProjects />
      </Layout>
    </>
  );
};

export default Projects;
