import React, { useState } from "react";
import ScrollDetector from "../../components/ScrollDetector";
import { projectsData } from "../../database/projectsData";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import Head from "next/head";
import ProjectHeader from "../../components/Projects/ProjectHeader";
import ProjectFeatures from "../../components/Projects/ProjectFeatures";
import ProjectChallenges from "../../components/Projects/ProjectChallenges";
import ProjectResult from "../../components/Projects/ProjectResult";
import { motion } from "framer-motion";

const ProjectDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [userHasScroll, setUserHasScroll] = useState(false);

  const handleUserScroll = (hasScroll: boolean) => {
    setUserHasScroll(hasScroll);
  };
  const filteredProjectData = projectsData.filter(
    (data) => data.id.toString() === id
  );

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.2, duration: 0.8 },
    },
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

      <Layout userHasScroll={userHasScroll}>
        <ScrollDetector onScroll={handleUserScroll} />
        <motion.div
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="py-20 flex flex-col gap-10"
        >
          <ProjectHeader filteredProjectData={filteredProjectData} />
          <ProjectFeatures filteredProjectData={filteredProjectData} />
          <ProjectChallenges filteredProjectData={filteredProjectData} />
          <ProjectResult filteredProjectData={filteredProjectData} />
        </motion.div>
      </Layout>
    </>
  );
};

export default ProjectDetails;
