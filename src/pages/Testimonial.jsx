import React, { useState } from "react";
import student from "../assets/Student.webp";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    name: "Riski",
    heading : "Best Quality Online Course!",
    role: "Software Engineer",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ipsa ratione culpa itaque dignissimos impedit deserunt repellat esse eos, illo eius neque expedita similique ab consequuntur magni nobis sapiente tempora.",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Nguyen Van",
    heading : "Very complete class",
    role: "Frontend Developer",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ipsa ratione culpa itaque dignissimos impedit deserunt repellat esse eos, illo eius neque expedita similique ab consequuntur magni nobis sapiente tempora.",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Diana Jordan",
    heading : "Great Quality!",
    role: "UI Designer",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ipsa ratione culpa itaque dignissimos impedit deserunt repellat esse eos, illo eius neque expedita similique ab consequuntur magni nobis sapiente tempora.",
    img: "https://randomuser.me/api/portraits/men/65.jpg",
  },
  {
    name: "Ashley Graham",
    heading : "Detailed learning materials",
    role: "Back-End Developer",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ipsa ratione culpa itaque dignissimos impedit deserunt repellat esse eos, illo eius neque expedita similique ab consequuntur magni nobis sapiente tempora.",
    img: "https://randomuser.me/api/portraits/men/65.jpg",
  },
  {
    name: "Luis Sera",
    heading : "Detailed learning materials",
    role: "UI/UX Engineer",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ipsa ratione culpa itaque dignissimos impedit deserunt repellat esse eos, illo eius neque expedita similique ab consequuntur magni nobis sapiente tempora.",
    img: "https://randomuser.me/api/portraits/men/65.jpg",
  }
];

const Testimonial = () => {
  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);

  return (
    <div className="py-24 px-6 md:px-16 bg-gray-50" id="testimonial">
      <div className="flex flex-col lg:flex-row items-center gap-16">

        {/* LEFT SIDE */}
        <div className="w-full lg:w-1/2 relative">
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
            Testimonial What our <br />
            <span className="text-teal-600">Students</span> Say
          </h2>

          <Swiper
            modules={[Autoplay, Navigation]}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false
            }}
            navigation={{
              prevEl,
              nextEl,
            }}
            loop={true}
            className="mt-10 relative"
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <h3 className="text-xl font-semibold mt-6">
                  {item.heading}
                </h3>
                <p className="text-gray-500 mt-4 leading-relaxed">
                  {item.text}
                </p>
                <div className="flex items-center gap-4 mt-6 bg-white shadow-md p-4 rounded-lg w-fit">
                  <img
                    src={item.img}
                    className="w-12 h-12 rounded-full object-cover"
                    alt={item.name}
                  />
                  <div>
                    <h4 className="font-semibold">{item.name}</h4>
                    <p className="text-sm text-gray-500">{item.role}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            {/* ARROWS */}
            <div className="flex gap-4 mt-8 lg:absolute lg:right-0 lg:bottom-0 z-10">
              <button 
                ref={(node) => setPrevEl(node)}
                className="testimonial-prev w-12 h-12 flex items-center justify-center rounded-full text-teal-700 font-bold bg-gray-100 shadow hover:bg-teal-600 hover:text-white transition"
              >
                ←
              </button>

              <button 
                ref={(node) => setNextEl(node)}
                className="testimonial-next w-12 h-12 flex items-center justify-center rounded-full text-teal-700 font-bold bg-gray-100 shadow hover:bg-teal-600 hover:text-white transition"
              >
                →
              </button>
            </div>
          </Swiper>
        </div>

        {/* RIGHT IMAGE - Modified className to hide on mobile */}
        <div className="hidden lg:flex lg:w-1/2 justify-center">
          <img
            src={student}
            alt="student"
            className="max-w-md w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;