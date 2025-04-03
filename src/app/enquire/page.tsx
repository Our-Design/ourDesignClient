import React from "react";

const Enquire = () => {
  const inputs = [
    {
      type: "text",
      label: "Name",
      placeholder: "John Doe",
      isRequired: true,
    },
    {
      type: "number",
      label: "Mobile No.",
      placeholder: "9999999999",
      isRequired: true,
    },
    {
      type: "text",
      label: "Budget",
      placeholder: "Enter your budget",
      isRequired: true,
    },
    {
      type: "text",
      label: "City",
      placeholder: "Enter your city",
      isRequired: true,
    },
    {
      type: "text",
      label: "Propert Type",
      placeholder: "1bhk, 2bhk, 3bhk etc...",
      isRequired: false,
    },
    {
      type: "text",
      label: "Description",
      placeholder: "Enter description",
      isRequired: false,
    },
    {
      type: "text",
      label: "Property Size",
      placeholder: "Enter property size",
      isRequired: false,
    },
    {
      type: "text",
      label: "Customer Requirements",
      placeholder: "Describe your requirements",
      isRequired: false,
    },
  ];

  return (
    <main className="bg-[url('https://interiosplash.com/wp-content/uploads/2024/09/12-optimized.webp')] p-8">
      <div className="bg-white/40 p-6 py-10 rounded flex flex-col gap-6">
        <h2 className="lg:text-4xl text-2xl font-bold text-center">
          Want to meet with Pros? Share your details.
        </h2>
        <div className="space-y-6 lg:mt-10 mb-5 my-5 grid lg:grid-cols-2 grid-cols-1 gap-6">
          {inputs.map((input, i) => {
            return (
              <div key={i} className="flex flex-col gap-2">
                <label className="font-bold text-lg">
                  {input.label} {input.isRequired && <span>*</span>}
                </label>
                <input
                  type={input.type}
                  placeholder={input.placeholder}
                  className="bg-white shadow-xl text-primary outline-none p-3 rounded-lg w-full"
                />
              </div>
            );
          })}
        </div>
        <p className="text-primary font-bold">
          (*) marked are mandatory to be filled to submit the form
        </p>
        <button className="bg-primary text-white lg:text-xl text-lg cursor-pointer hover:scale-101 hover:shadow-xl font-bold py-3 rounded">
          Get Started
        </button>
      </div>
    </main>
  );
};

export default Enquire;
