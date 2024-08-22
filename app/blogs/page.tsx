import React from "react";
import JsonData from '../Data/data.json';
import Link from "next/link";
import BlogLinks from "../components/bloglinks";

const Blogs = () => {
  return (
    <main className="flex min-h-screen w-[100%] flex-col items-center p-10">
      <div className="w-[55%]">
        {/* nav bar */}
        <div className="z-10 w-[60%] max-w-5xl font-mono text-sm lg:flex m-10">
          <ul className="flex flex-row">
            {JsonData.Header.map((data, index) => (
              <li className="px-4" key={index + data}>
                <Link href={data === "home" ? "/" : `/${data}`}>
                  {data}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* body */}
        <div className="m-12 mt-20">
          <p className="text-xl">read my blogs</p>
        </div>

        <div>
          {JsonData.Blogs.map((data, index) => (
            <BlogLinks
              key={`blog_${index}`}
              title={data.title}
              views={data.views}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Blogs;
