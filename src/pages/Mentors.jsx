import React, { useRef, useEffect, useState } from "react";
import mentor1 from "../assets/Mentor1.webp";
import mentor2 from "../assets/Mentor2.webp";
import mentor3 from "../assets/Mentor3.webp";
import mentor4 from "../assets/Mentor4.webp";
import Airnb from "../assets/airbnb.png";
import Grab from "../assets/grab.png";
import Google from "../assets/google.png";
import Microsoft from "../assets/microsoft.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const mentors = [
  {
    name: "Jhon Dwirian",
    role: "UI/UX Design",
    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    img: mentor1,
    company: Airnb,
  },
  {
    name: "Leon S Kennedy",
    role: "Machine Learning",
    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    img: mentor2,
    company: Google,
  },
  {
    name: "Nguyễn Thuy",
    role: "Android Development",
    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    img: mentor3,
    company: Grab,
  },
  {
    name: "Sarah Smith",
    role: "Web Development",
    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    img: mentor4,
    company: Microsoft,
  },
];

const Mentors = () => {
  const paginationRef = useRef(null);
  const [swiperReady, setSwiperReady] = useState(false);

  useEffect(() => {
    setSwiperReady(true);
  }, []);

  return (
    <section className="py-15 bg-[#f3f6f5] px-6 relative">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold">Our Expert Mentors</h2>
        </div>

        {swiperReady && (
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            pagination={{
              el: paginationRef.current,
              clickable: true,
              type: "bullets",
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {mentors.map((mentor, index) => (
              <SwiperSlide key={index} className="flex">
                <div className="bg-white rounded-2xl shadow-lg p-5 hover:shadow-2xl transition duration-300 h-auto flex flex-col justify-between">

                  {/* IMAGE & INFO */}
                  <div>
                    <img
                      src={mentor.img}
                      alt={mentor.name}
                      className="rounded-xl h-52 w-full object-cover mb-4"
                    />
                    <h3 className="font-semibold text-lg mb-3">{mentor.name}</h3>
                    <p className="text-gray-500 mb-2">{mentor.role}</p>
                    <p className="text-gray-400 text-sm">{mentor.desc}</p>
                  </div>

                  {/* COMPANY & Arrow */}
                  <div className="flex justify-between items-center mt-auto">
                    <img src={mentor.company} alt="Icons" className="text-teal-600 font-semibold h-[30px] w-[100px] mt-5"/>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        {/* Pagination + Arrows container */}
        <div className="flex items-center justify-between mt-6">

          {/* Pagination */}
          <div ref={paginationRef} className="custom-pagination-mentor"></div>

          {/* Arrows */}
          <div className="flex gap-2 md:gap-4">
            <button className="custom-prev bg-white shadow-md p-2 md:p-3 rounded-full text-teal-700 font-semibold hover:bg-teal-600 hover:text-white transition">
              ←
            </button>
            <button className="custom-next bg-white shadow-md p-2 md:p-3 rounded-full text-teal-700 font-semibold hover:bg-teal-600 hover:text-white transition">
              →
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Mentors;