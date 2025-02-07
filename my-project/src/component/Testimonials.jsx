import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Quote, Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Customer Name",
      rating: 5,
      text: "Customer feedback will be added soon. Stay tuned for updates!",
      designation: "Designation / Company Name",
    },
    {
      id: 2,
      name: "Customer Name",
      rating: 4,
      text: "Customer feedback will be added soon. Stay tuned for updates!",
      designation: "Designation / Company Name",
    },
    {
      id: 3,
      name: "Customer Name",
      rating: 5,
      text: "Customer feedback will be added soon. Stay tuned for updates!",
      designation: "Designation / Company Name",
    },
    {
      id: 4,
      name: "Customer Name",
      rating: 5,
      text: "Customer feedback will be added soon. Stay tuned for updates!",
      designation: "Designation / Company Name",
    },
    {
      id: 5,
      name: "Customer Name",
      rating: 4,
      text: "Customer feedback will be added soon. Stay tuned for updates!",
      designation: "Designation / Company Name",
    },
  ];

  return (
    <div id="testimonials" className="py-10 bg-gray-100 relative">
      <h1 className="text-center text-2xl lg:text-4xl font-bold">
        Customer Testimonials
      </h1>
      <div className="max-w-6xl mx-auto py-10 px-5">
        <Swiper
          style={{
            "--swiper-pagination-color": "#EF4444",
            "--swiper-pagination-bullet-inactive-color": "#999999",
            "--swiper-pagination-bullet-inactive-opacity": "1",
            "--swiper-pagination-bullet-size": "10px",
            "--swiper-pagination-bullet-horizontal-gap": "6px",
          }}
          modules={[Pagination, Autoplay]}
          loop={true}
          speed={600}
          autoplay={{ delay: 5000 }}
          slidesPerView={3}
          spaceBetween={30}
          breakpoints={{
            320: { slidesPerView: 1 },
            480: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{
            el: ".swiper-pagination",
            type: "bullets",
            clickable: true,
          }}
          className="mySwiper"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="border border-gray-400 shadow-md shadow-red-500 rounded-lg flex flex-col p-4">
                <div className="flex">
                  {[...Array(5)].map((_, index) => (
                    <Star key={index} fill={item.rating > index} />
                  ))}
                </div>
                <p className="py-3">{item.text}</p>
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold text-red-500 text-lg">
                      {item.name}
                    </h3>
                    <p className="text-sm mt-1">{item.designation}</p>
                  </div>
                  <Quote className="text-red-400" />
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-pagination my-10 gap-1 relative"></div>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
