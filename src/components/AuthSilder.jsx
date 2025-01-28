import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Link } from "react-router";

const sliderArray = [
  {
    id: 1,
    title: "Start your investment journey with <b>Inlancer</b>",
    subTitle:
      "Join Inlancer today and start investing with <b>0 commission*</b>",
  },
  {
    id: 2,
    title: "Unlock the potential of your assets with <b>Inlancer</b>",
    subTitle:
      "Invest smartly and securely with <b>low fees*</b> and expert guidance.",
  },
  {
    id: 5,
    title: "Achieve your financial goals with <b>Inlancer</b>",
    subTitle:
      "Let us guide you towards better financial outcomes with our trusted tools and insights.",
  },
  {
    id: 6,
    title: "Get personalized advice from <b>Inlancer</b>",
    subTitle:
      "Our experts offer tailored recommendations to maximize your investment returns.",
  }
];

export default function AuthSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const handlePaginationClick = (i) => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideTo(i);
    }
  };

  return (
    <Swiper
      ref={swiperRef}
      className="space-y-4 relative"
      modules={[Autoplay]}
      slidesPerView={1}
      autoplay={{
        delay: 4500,
        disableOnInteraction: false,
      }}
      onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
    >
      {sliderArray.map((s) => (
        <SwiperSlide key={s.id}>
          <div className="max-w-96 space-y-1">
            <h2
              className="text-white text-4xl"
              dangerouslySetInnerHTML={{ __html: s.title }}
            />
            <h6
              className="text-white text-lg"
              dangerouslySetInnerHTML={{ __html: s.subTitle }}
            />
          </div>
        </SwiperSlide>
      ))}
      <Link to="/" className="underline text-mediumGray text-sm block">
        Learn more
      </Link>

      <div className="w-full flex justify-between items-center">
        <div className="custom-pagination">
          {sliderArray.map((_, index) => (
            <button
              key={index}
              onClick={() => handlePaginationClick(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={activeIndex === index ? "active" : ""}
            ></button>
          ))}
        </div>
        <div className="flex items-center gap-6">
          <button
            onClick={() => swiperRef.current.swiper.slidePrev()}
            className="rotate-180 disabled:opacity-50"
            disabled={
              swiperRef.current ? swiperRef.current.swiper.isBeginning : false
            }
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.43 5.92999L20.5 12L14.43 18.07"
                stroke="white"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3.5 12H20.33"
                stroke="white"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            className="disabled:opacity-50"
            onClick={() => swiperRef.current.swiper.slideNext()}
            disabled={
              swiperRef.current ? swiperRef.current.swiper.isEnd : false
            }
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.43 5.92999L20.5 12L14.43 18.07"
                stroke="white"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3.5 12H20.33"
                stroke="white"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </Swiper>
  );
}
