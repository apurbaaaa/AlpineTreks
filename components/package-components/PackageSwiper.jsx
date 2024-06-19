import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import "swiper/swiper-bundle.css"; // Import Swiper styles

export default function PackageSwiper({ data }) {
  return (
    <div className="row justify-center pt-30">
      <div className="col-12">
        <div className="relative overflow-hidden" style={{ height: "438px" }}>
          <Swiper
            spaceBetween={10}
            className="w-100 overflow-visible"
            style={{ maxWidth: "100%" }}
            loop={true}
            navigation={{
              prevEl: ".js-sliderMain-prev",
              nextEl: ".js-sliderMain-next",
            }}
            modules={[Navigation, Pagination]}
            slidesPerView={1}
            pagination={{ clickable: true }} // Adding pagination
          >
            {data.gallery && data.gallery.length > 0 ? (
              data.gallery.map((elm, i) => (
                <SwiperSlide key={i}>
                  <div className="swiper-slide">
                    <Image
                      width={850}
                      height={510}
                      src={elm}
                      alt={`Slide image ${i + 1}`} // Unique alt text
                      className="img-cover rounded-12"
                      placeholder="blur" // Using blur placeholder for better UX
                      blurDataURL={elm} // For SSR optimization
                    />
                  </div>
                </SwiperSlide>
              ))
            ) : (
              <div className="no-images-placeholder">No images available</div>
            )}
          </Swiper>
          <div className="navAbsolute -type-2">
            <button
              className="navAbsolute__button bg-white js-sliderMain-prev"
              aria-label="Previous slide"
            >
              <i className="icon-arrow-left text-14"></i>
            </button>
            <button
              className="navAbsolute__button bg-white js-sliderMain-next"
              aria-label="Next slide"
            >
              <i className="icon-arrow-right text-14"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
