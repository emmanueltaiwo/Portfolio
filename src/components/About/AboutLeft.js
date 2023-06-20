import React from "react";
import Button from "../Button/Button";
import { useRouter } from "next/router";
import CustomMediumText from "../UI/CustomMediumText";
import { motion } from "framer-motion";

const AboutLeft = () => {
  const router = useRouter();

   const buttonVariants = {
     hidden: { opacity: 0, scale: 0.8 },
     visible: {
       opacity: 1,
       scale: 1,
       transition: { delay: 0.5, duration: 0.5 },
     },
   };
  return (
    <div className="xl:w-2/5 md:w-2/5">
      <motion.div variants={buttonVariants} initial="hidden" animate="visible">
        <CustomMediumText>Get To Know Me!</CustomMediumText>
        <p className="mt-10 text-neutral-500 pb-10 text-base">
          I&apos;m a Frontend Developer passionate about building responsive UI
          & Web Applications that lead to the success of the overall product.
          You can check out some of my work in the Projects section.
          <br />
          <br />
          I like making music, I also like playing video game, But I also like
          sharing content related to the stuff that I have learned over the
          years in Web Development I do this to help other people in the Dev
          Community.
          <br />
          <br />
          Feel free to Connect or Follow me on my{" "}
          <a
            href="https://www.linkedin.com/in/realemmanuel/"
            className="text-blue-800"
          >
            Linkedin
          </a>{" "}
          where I post useful content related to Web Development and
          Programming; here&apos;s my{" "}
          <a
            href="https://twitter.com/realdevemmanuel"
            className="text-blue-800"
          >
            Twitter
          </a>
          , in case you like memes 😜.
          <br />
          <br />
          I&apos;m open to Job opportunities where I can contribute, learn and
          grow. If you have a good opportunity that matches my skills and
          experience, please don&apos;t hesitate to contact me.
        </p>

        <div onClick={() => router.push("/contact")}>
          <Button>Contact me</Button>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutLeft;
