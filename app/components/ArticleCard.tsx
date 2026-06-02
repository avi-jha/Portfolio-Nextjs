import React from "react";
import Link from "next/link";

interface ArticleCardProps {
  title: string;
  subtitle: string;
  description: string;
  href: string;
}

export default function ArticleCard({ title, subtitle, description, href }: ArticleCardProps) {
  return (
    <article>
      <Link href={href} className="article-card">
        <h3 className="article-title">{title}</h3>
        {subtitle && <p className="article-subtitle">{subtitle}</p>}
        <p className="article-desc">{description}</p>
        <div className="article-read-more">
          Read more: {title}
          <svg width="36" height="12" viewBox="0 0 36 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M0.75 6H31.25 M26 0.75L31.25 6L26 11.25"></path>
          </svg>
        </div>
      </Link>
    </article>
  );
}
