
import { Star } from 'lucide-react';
import Marquee from 'react-fast-marquee';
import { reviews } from '@/data';

export default function Reviews() {


  // Split reviews into 3 groups for 3 rows
  const reviewsPerRow = 4;
  const row1Reviews = reviews.slice(0, reviewsPerRow);
  const row2Reviews = reviews.slice(reviewsPerRow, reviewsPerRow * 2);
  const row3Reviews = reviews.slice(reviewsPerRow * 2); // Use all remaining reviews for row 3

  // Google-style avatar colors, picked per-reviewer by name hash
  const avatarColors = ['bg-[#4285F4]', 'bg-[#EA4335]', 'bg-[#FBBC05]', 'bg-[#34A853]', 'bg-[#7B1FA2]', 'bg-[#00796B]'];

  const GoogleG = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5" aria-label="Google">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.1a6.6 6.6 0 0 1 0-4.2V7.06H2.18a11 11 0 0 0 0 9.88l3.66-2.84z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15A10.97 10.97 0 0 0 12 1 11 11 0 0 0 2.18 7.06l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38z" />
    </svg>
  );

  const ReviewCard = ({ review, index }) => {
    const initial = review.name.trim()[0]?.toUpperCase() || '?';
    const color = avatarColors[review.name.length % avatarColors.length];
    return (
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-4 mx-2 min-w-[320px] max-w-xs h-[200px] flex flex-col font-creato">
        {/* Header */}
        <div className="flex items-start justify-between mb-2">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-full ${color} flex items-center justify-center shrink-0`}>
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
        <div className="text-sm text-gray-700 flex-1 overflow-hidden">
          <p className="line-clamp-4">{review.review}</p>
        </div>
        <div className="text-xs text-gray-400 mt-2">Posted on Google</div>
      </div>
    );
  };

  return (
    <div className="">
      <div className="space-y-8">
        {/* Row 1 - Left to Right */}
        <Marquee
          speed={20}
          gradient={false}
          pauseOnHover={false}
          className="py-2"
        >
          {[...row1Reviews, ...row1Reviews].map((review, index) => (
            <ReviewCard
              key={`row1-${index}`}
              review={review}
              index={index}
            />
          ))}
        </Marquee>

        {/* Row 2 - Right to Left */}
        <Marquee
          speed={20}
          gradient={false}
          pauseOnHover={false}
          direction="right"
          className="py-2 !my-1"
        >
          {[...row2Reviews, ...row2Reviews].map((review, index) => (
            <ReviewCard
              key={`row2-${index}`}
              review={review}
              index={index}
            />
          ))}
        </Marquee>

        {/* Row 3 - Left to Right */}
        <Marquee
          speed={20}
          gradient={false}
          pauseOnHover={false}
          className="py-2 !my-1 !hidden md:!flex"
        >
          {[...row3Reviews, ...row3Reviews].map((review, index) => (
            <ReviewCard
              key={`row3-${index}`}
              review={review}
              index={index}
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
}
