import { Star, BadgeCheck } from "lucide-react";
import { reviews } from "@/data";

// Google-style avatar colors, picked per-reviewer by name length
const avatarColors = [
  "bg-[#4285F4]",
  "bg-[#EA4335]",
  "bg-[#FBBC05]",
  "bg-[#34A853]",
  "bg-[#7B1FA2]",
  "bg-[#00796B]",
];

const GoogleG = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" aria-label="Google">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1z" />
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23z" />
    <path fill="#FBBC05" d="M5.84 14.1a6.6 6.6 0 0 1 0-4.2V7.06H2.18a11 11 0 0 0 0 9.88l3.66-2.84z" />
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15A10.97 10.97 0 0 0 12 1 11 11 0 0 0 2.18 7.06l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38z" />
  </svg>
);

function ReviewCard({ review }) {
  const initial = review.name.trim()[0]?.toUpperCase() || "?";
  const color = avatarColors[review.name.length % avatarColors.length];
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-4 flex flex-col font-creato">
      {/* Header */}
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-center gap-3">
          <div
            className={`${color} flex items-center justify-center shrink-0`}
            style={{ width: 40, height: 40, minWidth: 40, minHeight: 40, borderRadius: "50%" }}
          >
            <span className="text-white font-medium text-lg">{initial}</span>
          </div>
          <div>
            <div className="font-medium text-sm text-gray-900">{review.name}</div>
            <div className="flex items-center gap-1 mt-0.5">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              ))}
            </div>
          </div>
        </div>
        <a
          href={review.link}
          target="_blank"
          rel="noopener noreferrer"
          title="View on Google"
          className="p-1"
        >
          <GoogleG />
        </a>
      </div>

      {/* Content */}
      <div className="text-gray-700 flex-1 overflow-hidden">
        <p className="line-clamp-5 !text-gray-700 !m-0 !text-[13px] !leading-[1.4]">{review.review}</p>
      </div>
      <div className="mt-2 flex items-center gap-2">
        <span className="inline-flex items-center gap-1 bg-gray-100 border border-gray-200 rounded-full px-2 py-0.5 text-xs text-gray-600">
          <BadgeCheck className="w-3.5 h-3.5 text-[#4285F4]" />
          Verified on Google
        </span>
        <a
          href={review.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-[#4285F4] hover:underline"
        >
          View
        </a>
      </div>
    </div>
  );
}

export default function ReviewBlock() {
  const featured = reviews.slice(0, 3);
  return (
    <div className="space-y-4">
      {featured.map((review, index) => (
        <ReviewCard review={review} key={index} />
      ))}
    </div>
  );
}
