import { reviews } from "@/data";

export default function ReviewBlock() {
  return (
    <div className="owl-carousel owl-theme wow fadeInUp owl-single-dots">
      {/* testimonials begin */}
      {reviews.map((review, index) => (
        <div className="item" key={index}>
          <div className="relative p-2">
            <div className="relative">
              <img
                className="relative z-2 w-80px rounded-1"
                alt=""
               src={`/${review.profile_pic}`}
              />
            </div>
            <div className="mt-3 fw-600">{review.name}</div>
            <div className="de-rating-ext mb-3">
              <span className="d-stars">
                {[...Array(5)].map((_, i) => (
                  <i className="fa fa-star" key={i}></i>
                ))}
              </span>
            </div>
            <p>{review.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
