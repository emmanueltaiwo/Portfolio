import React from "react";
import BlogHeader from "./blogHeader";
import Image from "next/image";
import BlogList from "./blogList";

const BlogPage = () => {
  return (
    <main className="mt-[10vh] w-full py-5">
      <BlogHeader />

      <BlogList />
    </main>
  );
};

export default BlogPage;
