import React from "react";
import EnquireForm from "./components/EnquireForm";

const Enquire = () => {
  return (
    <main className="bg-[url('https://interiosplash.com/wp-content/uploads/2024/09/12-optimized.webp')] bg-no-repeat bg-cover lg:p-8 p-4 flex justify-center">
      <div className="bg-white/70 lg:w-[70%] backdrop-blur lg:p-12 p-6 py-10 rounded-lg flex flex-col gap-6">
        <h2 className="lg:text-3xl lg:pb-5 pb-3 text-2xl font-bold text-center">
          Want to meet with Pros?
          <br /> Share your details.
        </h2>
        <EnquireForm />
      </div>
    </main>
  );
};

export default Enquire;
