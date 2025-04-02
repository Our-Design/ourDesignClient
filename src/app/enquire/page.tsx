import React from "react";

const Enquire = () => {
  const inputs = [
    {
      type: "text",
      placeholder: "Name",
    },
    {
      type: "number",
      placeholder: "Mobile No.",
    },
    {
      type: "text",
      placeholder: "Budget",
    },
    {
      type: "text",
      placeholder: "City",
    },
  ];

  return (
    <main className="bg-[url('https://interiosplash.com/wp-content/uploads/2024/09/12-optimized.webp')] p-8">
      <div className="bg-white/40 p-6 rounded flex flex-col gap-6">
        <h2 className="lg:text-4xl text-2xl font-bold text-center">
          Want to meet with Pros? Share your details.
        </h2>
        <div className="space-y-6 lg:my-10 my-5">
          {inputs.map((input, i) => {
            return (
              <input
                key={i}
                type={input.type}
                placeholder={input.placeholder}
                className="bg-white shadow-xl text-primary outline-none p-3 rounded-lg w-full"
              />
            );
          })}
        </div>
        <button className="bg-primary text-white lg:text-xl text-lg cursor-pointer hover:scale-101 hover:shadow-xl font-bold py-3 rounded">
          Get Started
        </button>
      </div>
    </main>
  );
};

export default Enquire;
