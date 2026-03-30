import React from "react";
import HeroImg from "../assets/hero-img.webp";
import CertificateImg from "../assets/Certificate-img.webp";

const Home = () => {
  return (
    <div className="pt-20 pb-15 px-6 md:px-10">

      {/* TOP SECTION (Left + Right Side by Side) */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-10">

        {/* LEFT CONTENT */}
        <div className="flex flex-col gap-6 max-w-xl">
          <h2 className="text-3xl md:text-6xl font-medium leading-tight">
            <span className="text-teal-700">Improve</span> your Skill with
            Different Way
          </h2>

          <p className="text-gray-500">
            Let's take an online course to improve your skills in a different way,
            you can set your own study time according to your learning speed.
            So you can study comfortably and absorb the material easily.
          </p>

          <div className="flex gap-4">
            <button
              type="button"
              className="text-white bg-teal-700 font-medium rounded-full text-sm px-5 py-3"
            >
              Get Started
            </button>

            <button
              type="button"
              className="text-teal-700 border-2 border-teal-700 px-5 py-3 font-medium rounded-full text-sm"
            >
              Watch Video
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className="relative">
          <img
            src={HeroImg}
            alt="Hero Image"
            className="w-full max-w-md md:max-w-lg"
          />

          {/* Certificate Box */}
          <div
            className="
              w-64 bg-white rounded-md flex gap-3 items-center
              absolute -bottom-10 left-0
              md:bottom-10 md:right-10 md:left-auto
              shadow-lg p-4
            "
          >
            <img
              src={CertificateImg}
              alt="Certificate"
              className="w-14 h-14"
            />

            <div>
              <h6 className="text-yellow-400 font-semibold">
                Certificate
              </h6>
              <p className="text-gray-500 text-sm">
                There are certificates for all courses.
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* THIRD DIV BELOW BOTH */}
      <div className="mt-15 md:mt-0 bg-white h-auto md:h-60 w-full rounded-md shadow-sm flex flex-col md:flex-row justify-center items-center gap-6 md:gap-40 text-center p-6">

        <div>
          <p className="text-yellow-400 text-4xl md:text-5xl font-semibold mb-3">
            10K+
          </p>
          <h5 className="text-lg text-gray-600 font-semibold">
            Students
          </h5>
        </div>

        <div>
          <p className="text-yellow-400 text-4xl md:text-5xl font-semibold mb-3">
            20+
          </p>
          <h5 className="text-lg text-gray-600 font-semibold">
            Quality Course
          </h5>
        </div>

        <div>
          <p className="text-yellow-400 text-4xl md:text-5xl font-semibold mb-3">
            10+
          </p>
          <h5 className="text-lg text-gray-600 font-semibold">
            Experience Mentors
          </h5>
        </div>

      </div>

    </div>
  );
};

export default Home;