import React, { useRef } from "react";
import Image from "next/image";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  const contactRef = useRef(null);
  return (
    <footer
      className="w-full bg-white text-center relative bottom-0 h-[100vh] justify-center flex gap-10 flex-col"
      id="contact"
      ref={contactRef}
    >
      <h1 className="text-black text-[40px] md:text-[70px] md:tracking-wider font-bold">
        Get In Touch
      </h1>
      <p className="text-black mx-5 md:mx-auto md:w-[600px] text-[15px] md:text-[20px]">
        I&apos;m currently looking for opportunities. Whether its a Full-Time
        Job or a Freelance work. Send me a message, I&apos;ll try to get back to
        you as soon as possible.
      </p>
      <div className="w-full mx-auto flex flex-col md:flex-row items-center justify-center gap-5">
        <a
          href="https://wa.me/2348127984099?text=Hello%20Emmanuel%2C%20I%20just%20visited%20your%20portfolio%20and%20i%20want%20to%20discuss%20with%20you%20about%20some%20opportunities."
          className="w-72 h-fit text-black flex gap-3 items-center justify-around text-lg font-bold mx-5 border-[1px] hover:text-blue-700 border-blue-500 py-3 px-[5vh] hover:border-black"
        >
          <Image
            src="/assets/Images/chat.gif"
            height={50}
            width={50}
            alt="Mail Gif"
            className="my-auto"
          />
          <span className="text-[20px]">Whatsapp</span>
        </a>
        <a
          href="mailto:devemmanuel1@gmail.com"
          className="w-72 h-fit text-black flex gap-3 items-center justify-around text-lg font-bold mx-5 border-[1px] py-3 hover:text-blue-700 border-blue-500 px-[5vh] hover:border-black"
        >
          <Image
            src="/assets/Images/mail.gif"
            height={50}
            width={50}
            alt="Mail Gif"
            className="my-auto"
          />
          <span className="text-[20px]">Send A Mail</span>
        </a>
      </div>
      <a
        href="mailto:devemmanuel1@gmail.com"
        className="text-lg text-slate-500 hover:text-blue-700"
      >
        devemmanuel1@gmail.com
      </a>

      <ul className="mt-5 flex gap-7 flex-wrap mx-auto">
        <li>
          <a target="_blank" href="https://github.com/realemmanuel">
            <GitHubIcon
              fontSize="large"
              className="text-black hover:text-blue-700"
            />
          </a>
        </li>
        <li>
          <a target="_blank" href="https://www.linkedin.com/in/taiwoemmanuel/">
            <LinkedInIcon
              fontSize="large"
              className="text-black hover:text-blue-700"
            />
          </a>
        </li>
        <li>
          <a target="_blank" href="https://twitter.com/thedevemmanuel/">
            <TwitterIcon
              fontSize="large"
              className="text-black hover:text-blue-700"
            />
          </a>
        </li>
        <li>
          <a target="_blank" href="https://www.instagram.com/itsdevemmanuel/">
            <InstagramIcon
              fontSize="large"
              className="text-black hover:text-blue-700"
            />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
