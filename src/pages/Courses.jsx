import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import CourseImg1 from "../assets/Course-img1.webp"
import CourseImg2 from "../assets/Course-img2.webp"
import CourseImg3 from "../assets/Course-img3.webp"
import CourseImg4 from "../assets/Course-img4.webp"
import CourseImg5 from "../assets/Course-img5.webp"
import CourseImg6 from "../assets/Course-img6.webp"
import CourseImg7 from "../assets/Course-img7.webp"

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const courses = [
  {
    id: 1,
    title: "Android Development from Zero to Hero",
    price: "$25",
    rating: 5,
    reviews: 8,
    img: CourseImg1
  },
  {
    id: 2,
    title: "UI/UX Complete Guide",
    price: "$20",
    rating: 5,
    reviews: 15,
    img: CourseImg2
  },
  {
    id: 3,
    title: "Mastering Data Modeling Fundamentals",
    price: "$30",
    rating: 4,
    reviews: 7,
    img: CourseImg3
  },
  {
    id: 4,
    title: "React Complete Bootcamp",
    price: "$28",
    rating: 5,
    reviews: 12,
    img: CourseImg4
  },
  {
    id: 5,
    title: "Python for Beginners",
    price: "$22",
    rating: 5,
    reviews: 10,
    img: CourseImg5
  },
  {
    id: 6,
    title: "Full Stack Web Development",
    price: "$35",
    rating: 5,
    reviews: 18,
    img: CourseImg6
  },
  {
    id: 7,
    title: "Machine Learning A-Z",
    price: "$40",
    rating: 5,
    reviews: 22,
    img: CourseImg7
  }
];

const Courses = () => {
  return (
    <div className="py-24 bg-gray-100 px-6 md:px-16" id="courses">

      <div className="flex flex-col lg:flex-row gap-16">

        {/* LEFT SIDE HEADING */}
        <div className="lg:w-1/3 flex items-center ">
          <h2 className="text-4xl text-center md:text-5xl font-semibold leading-tight">
            Most Popular Courses
          </h2>
        </div>

        {/* RIGHT SIDE SLIDER */}
        <div className="lg:w-2/3 relative">

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false
            }}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev"
            }}
            pagination={{
              el: ".custom-pagination",
              clickable: true,
              type: "bullets"
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
          >
            {courses.map((course) => (
              <SwiperSlide key={course.id} className="flex">
                <div className="bg-white rounded-2xl shadow-lg p-5 hover:shadow-2xl transition duration-300 h-[420px] flex flex-col justify-between">

                  {/* IMAGE & TITLE */}
                  <div>
                    <img
                      src={course.img}
                      alt={course.title}
                      className="rounded-xl h-52 w-full object-cover mb-4"
                    />
                    <h3 className="font-semibold text-lg mb-3">{course.title}</h3>

                    {/* RATING */}
                    <div className="flex items-center gap-1 mb-4">
                      {Array(course.rating).fill().map((_, i) => (
                        <span key={i} className="text-yellow-400">★</span>
                      ))}
                      <span className="text-gray-500 text-sm ml-2">
                        ({course.reviews})
                      </span>
                    </div>
                  </div>

                  {/* PRICE & ARROW */}
                  <div className="flex justify-between items-center mt-auto">
                    <p className="text-teal-600 font-semibold">
                      {course.price} / course
                    </p>
                    <button className="text-teal-600 text-xl">→</button>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* CUSTOM PAGINATION */}
          <div className="custom-pagination mt-12"></div>

          {/* CUSTOM ARROWS */}
          <div className="flex gap-2 md:gap-4 absolute -bottom-2 right-0">
            <button className="custom-prev bg-white shadow-md p-2 md:p-3 rounded-full text-teal-700 font-semibold hover:bg-teal-600 hover:text-white transition">
              ←
            </button>
            <button className="custom-next bg-white shadow-md p-2 md:p-3 rounded-full text-teal-700 font-semibold hover:bg-teal-600 hover:text-white transition">
              →
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Courses;