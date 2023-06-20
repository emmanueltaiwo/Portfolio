import "@/styles/globals.css";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

export default function App({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating a delay for the loader animation
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(delay);
  }, []);

  const loaderVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.5 } },
    exit: { opacity: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className={`loader-container ${isLoading ? "bg-black" : ""}`}>
      {isLoading ? (
        <motion.div
          className="loader flex items-center justify-center h-screen text-center"
          variants={loaderVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <Typewriter
            options={{
              strings: ["Welcome To My Portfolio!"],
              autoStart: true,
              loop: true,
              wrapperClassName: "text-1xl sm:text-2xl text-green-700",
              cursorClassName: "text-3xl text-gray-800",
            }}
          />
        </motion.div>
      ) : (
        <Component {...pageProps} />
      )}
    </div>
  );
}
