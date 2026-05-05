"use client";

import { Star } from "lucide-react";
import Marquee from "react-fast-marquee";
import { reviews } from "@/data";

export default function SocialProof() {
  const featured = reviews.slice(0, 8);

  return (
    <Marquee speed={30} gradient={false} pauseOnHover className="mb-4">
      {featured.map((r, i) => (
        <div
          key={i}
          className="mx-2 w-[260px] rounded-xl bg-white p-3 shadow-sm border border-gray-200"
        >
          <div className="flex items-center gap-2 mb-1">
            <div className="flex">
              {[...Array(r.rating)].map((_, j) => (
                <Star key={j} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="text-xs text-gray-700 font-medium truncate">{r.name}</span>
          </div>
          <p className="text-xs text-gray-600 line-clamp-3 m-0">{r.review}</p>
        </div>
      ))}
    </Marquee>
  );
}
