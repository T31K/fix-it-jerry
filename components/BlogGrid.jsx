"use client";
import { useState } from "react";

const labels = {
  all: "All posts",
  "cost-guide": "Repair Costs",
  symptom: "Troubleshooting",
  listicle: "Roundups",
};

const fmt = (d) =>
  new Date(d).toLocaleDateString("en-MY", { day: "numeric", month: "short", year: "numeric" });

function PostCard({ post }) {
  return (
    <a
      href={`/guides/${post.slug}`}
      className="group flex flex-col h-full bg-white border rounded-xl overflow-hidden hover:shadow-lg transition-shadow text-decoration-none"
    >
      <div className="aspect-[1200/630] overflow-hidden bg-stone-100">
        <img
          src={`/og_images/guide-${post.slug}.png`}
          alt={post.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="flex flex-col flex-1 p-5">
        <div className="flex items-center gap-2 text-xs text-stone-500 mb-2">
          <span className="font-semibold text-green-800">{labels[post.category] || post.category}</span>
          <span>·</span>
          <time dateTime={post.datePublished}>{fmt(post.datePublished)}</time>
          <span>·</span>
          <span>{post.readMinutes} min read</span>
        </div>
        <h3 className="!text-lg font-bold text-stone-900 mb-2 leading-snug group-hover:text-green-800">
          {post.title}
        </h3>
        <p className="text-sm text-stone-600 mb-0 line-clamp-3">{post.intro}</p>
      </div>
    </a>
  );
}

export default function BlogGrid({ posts }) {
  const cats = ["all", ...new Set(posts.map((p) => p.category))];
  const [cat, setCat] = useState("all");
  const shown = cat === "all" ? posts : posts.filter((p) => p.category === cat);

  return (
    <>
      <div className="flex flex-wrap gap-2 mb-8">
        {cats.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setCat(c)}
            className={`px-4 py-2 rounded-full text-sm font-semibold border transition-colors ${
              cat === c
                ? "bg-stone-900 text-white border-stone-900"
                : "bg-white text-stone-700 border-stone-300 hover:border-stone-900"
            }`}
          >
            {labels[c] || c}
            <span className="ml-1 opacity-60">
              {c === "all" ? posts.length : posts.filter((p) => p.category === c).length}
            </span>
          </button>
        ))}
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </>
  );
}
