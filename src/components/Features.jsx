const Features = ({ features }) => {
  return (
    <div className="grid md:grid-cols-2 gap-6 mt-10">
      {features.map((item, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-xl p-6 flex gap-4"
        >
          <div className="bg-teal-600 w-10 h-10 rounded-full flex items-center justify-center text-white">
            $
          </div>

          <div>
            <h4 className="text-orange-500 font-semibold">
              {item.title}
            </h4>

            <p className="text-gray-500 text-sm">
              {item.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Features;
