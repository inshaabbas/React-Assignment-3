import React from "react";
const Subscribe = () => {
  return (
    <>
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto bg-yellow-500 rounded-[40px] py-16 px-8 text-center">

        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Subscribe to Our News Letter
        </h2>

        <p className="text-gray-800 mb-8">
          Subscribe to our newsletter to get information about our courses.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4 max-w-xl mx-auto">
  <input
    type="email"
    placeholder="Enter your Email Address"
    className="flex-1 px-6 py-4 rounded-lg bg-white outline-none shadow-md"
  />

  <button className="bg-teal-700 text-white px-6 py-4 rounded-lg hover:bg-teal-800 transition">
    Subscribe
  </button>
</div>

      </div>
    </section>
    </>
  )
}

export default Subscribe