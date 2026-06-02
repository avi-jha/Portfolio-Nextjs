import React from "react";
import JsonData from "../Data/data.json";
import Link from "next/link";

export const metadata = {
  title: "Blogs | Avinash Jha",
  description: "Read my technical articles and blog posts.",
};

const Blogs = () => {
  return (
    <>
      <nav className="navbar" style={{ position: "relative" }}>
        <Link href="/" className="nav-logo">
          Avi<span>Jha</span>
        </Link>
        <ul className="nav-menu">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/#about">About</Link>
          </li>
          <li>
            <Link href="/#contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <main className="section" style={{ paddingTop: "2rem" }}>
        <h1
          className="section-title"
          style={{ fontSize: "2.2rem", marginBottom: "0.5rem" }}
        >
          Read My Blogs
        </h1>
        <div className="section-title-line" />

        <div style={{ marginTop: "2rem" }}>
          {JsonData.Blogs.map((blog, index) => (
            <Link
              key={`blog_${index}`}
              href={`/posts/?fileName=${blog.fileName}`}
              className="blog-card"
            >
              <div className="blog-card-title">{blog.title}</div>
              <div className="blog-card-date">{blog.views}</div>
            </Link>
          ))}
        </div>
      </main>

      <footer className="footer">
        <p>
          Built with{" "}
          <a
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Next.js
          </a>{" "}
          &mdash; Designed & developed by Avinash Jha
        </p>
      </footer>
    </>
  );
};

export default Blogs;
