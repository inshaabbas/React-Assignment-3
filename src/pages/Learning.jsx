import featureImg from "../assets/feature-img.webp"

const features = [
  {
    title: "Easy Accessable",
    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
    icon : ""
  },
  {
    title: "More Affordable Cost",
    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
  },
  {
    title: "Flexible Study Time",
    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
  },
  {
    title: "Consultation With Mentor",
    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
  },
];

const Learning = () => {
  return (<section className="py-20 px-6 bg-gray-50">
  <div className="container mx-auto flex flex-col lg:flex-row gap-16 items-center">

    {/* LEFT SIDE IMAGE */}
    <div className="relative lg:w-1/2">

      <img
        src={featureImg}
        alt="student"
        className="relative w-full md:w-120 "
      />

      {/* TOP CARD */}
      <div className="absolute top-10 right-0 bg-white shadow-lg p-4 rounded-xl w-48 hidden sm:block">
        <p className="font-semibold text-sm">Lorem ipsum dolor</p>

        <div className="mt-2 text-xs">
          <p>UI/UX Design</p>
          <div className="h-2 bg-gray-200 rounded">
            <div className="bg-purple-500 h-2 w-3/4 rounded"></div>
          </div>
        </div>

        <div className="mt-2 text-xs">
          <p>Mobile Development</p>
          <div className="h-2 bg-gray-200 rounded">
            <div className="bg-green-400 h-2 w-2/3 rounded"></div>
          </div>
        </div>

        <div className="mt-2 text-xs">
          <p>Web Development</p>
          <div className="h-2 bg-gray-200 rounded">
            <div className="bg-blue-500 h-2 w-1/2 rounded"></div>
          </div>
        </div>
      </div>

      {/* BOTTOM CARD */}
      <div className="absolute bottom-0 left-0 bg-white shadow-lg p-4 rounded-xl text-center hidden sm:block">
        <p className="font-semibold text-sm">Lorem ipsum</p>

        <div className="w-20 h-20 border-4 border-green-400 rounded-full flex items-center justify-center mt-2">
          <span className="text-green-500 font-bold">75%</span>
        </div>
      </div>

    </div>

    {/* RIGHT SIDE CONTENT */}
    <div className="lg:w-1/2">

      <h2 className="font-bold leading-tight text-3xl md:text-5xl">
        Make your <span className="text-teal-600">Learning</span> Enjoyable
      </h2>

      <p className="text-gray-500 mt-6">
        Set the way of learning according to your wishes with some of the benefits that you get us, so you on enjoy the lessons that we provide.
      </p>

      {/* FEATURES */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">
  {features.map((item, index) => (
    <div
      key={index}
      className="bg-white shadow-md rounded-xl p-6 flex gap-4"
    >
      <div className="bg-teal-600 text-white w-16 h-12 flex items-center justify-center rounded-full">
        $
      </div>

      <div>
        <h4 className="text-yellow-400 font-semibold">
          {item.title}
        </h4>

        <p className="text-gray-500 text-sm mt-1">
          {item.desc}
        </p>
      </div>
    </div>
  ))}
</div>

    </div>

  </div>
</section>
  );
};

export default Learning;