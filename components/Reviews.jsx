
import { Star, ExternalLink } from 'lucide-react';
import Marquee from 'react-fast-marquee';
import { reviews } from '@/data';
import { IconBrandGoogle } from '@tabler/icons-react';

export default function Reviews() {


  // Split reviews into 3 groups for 3 rows
  const reviewsPerRow = 4;
  const row1Reviews = reviews.slice(0, reviewsPerRow);
  const row2Reviews = reviews.slice(reviewsPerRow, reviewsPerRow * 2);
  const row3Reviews = reviews.slice(reviewsPerRow * 2); // Use all remaining reviews for row 3

  const ReviewCard = ({ review, index }) => (
    <div className="border border-black bg-green-200/50 p-4 mx-2 min-w-[320px] max-w-xs h-[200px] flex flex-col font-creato">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <div
            className={`w-12 h-12 border border-black bg-green-200 opacity-45 flex items-center justify-center`}
          >
            <span className="text-black font-bold text-lg">
              {review.name
                .split(' ')
                .map((n) => n[0])
                .join('')
                .slice(0, 2)
                }
            </span>
          </div>
          <div>
            <div className="font-semibold text-sm">{review.name}</div>
              <div className="flex">
            {[...Array(review.rating)].map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 text-yellow-200 fill-current"
              />
            ))}
          </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-y-1">
          <p className='!m-0 text-xs bg-green-200/50 px-2 whitespace-nowrap cursor-pointer font-semibold hover:bg-green-200/70 transition-colors duration-200 rounded-full'>Verified Review</p>
          {/* Google Review Button */}
          <a
            href={review.link}
            target="_blank"
            rel="noopener noreferrer"
            title="View Google Review"
          >
          <img src="/images/logo-light/google_white.svg" alt="Google Review" className="w-12 " />
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="text-sm text-gray-800 flex-1 overflow-hidden">
        <p className="line-clamp-4">{review.review}</p>
      </div>
    </div>
  );

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
