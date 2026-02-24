"use client";

import React from "react";
import { useFormPopup } from "@/components/FormPopup";

const CallToAction = () => {
  const { openForm } = useFormPopup();

  return (
    <div className="text-center mt-16">
      <div className="bg-white rounded-3xl p-8 shadow-lg max-w-md mx-auto">
        <h3 className="text-2xl font-bold text-heading mb-4">
          Love what you see?
        </h3>
        <p className="text-accent mb-6">
          Get a personalized design for your space
        </p>
        <button
          onClick={openForm}
          className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          Start Your Project
        </button>
      </div>
    </div>
  );
};

export default CallToAction;
