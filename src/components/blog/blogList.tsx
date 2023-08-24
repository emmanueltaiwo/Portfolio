import React from 'react'
import Image from 'next/image'

const BlogList = () => {
  return (
    <section className="md:py-[3vh] w-full">
      <h1 className="xl:mx-20 lg:mx-10 mx-5 lg:text-[50px] text-[40px]  font-bold text-slate-900">
        Latest Posts
      </h1>

      <main className="w-full flex flex-col">
        <article className="border-[1px] border-blue-700 p-3 rounded-lg xl:mx-20 lg:mx-10 mx-5 mt-[5vh] flex flex-col lg:flex-row lg:items-center gap-5">
          <div className="h-full">
            <Image
              src="/assets/images/sportpals.png"
              width={500}
              height={600}
              alt="Thumbnail"
              className="rounded-lg lg:min-w-[400px]"
            />
          </div>
          <div className="flex flex-col gap-2 h-[90%]">
            <h1 className="font-bold text-[15px] md:text-[20px] text-slate-600">
              Empowering Sports Enthusiasts Globally: The Story of SportPals - A
              Dynamic Web Application Connecting Passionate Athletes
            </h1>
            <p className="text-slate-800 font-medium">
              August 24 2023 . 15 min read
            </p>
            <p className="text-slate-500 text-[13px]">
              Step into the vibrant world of SportPals, a dynamic web
              application meticulously crafted to unite sports aficionados from
              every corner of the globe.
            </p>
            <div className="flex flex-wrap gap-5">
              <button className="w-fit h-fit rounded-xl border-[3px] border-blue-700 px-3 py-2 font-medium">
                React.js
              </button>
              <button className="w-fit h-fit rounded-xl border-[3px] border-blue-700 px-3 py-2 font-medium">
                Next.js
              </button>
            </div>
          </div>
        </article>
      </main>
    </section>
  );
}

export default BlogList