import React from "react";

const HeroSection = () => {
  const features = [
    "15+ new leads daily",
    "Verified contact information",
    "Project budget pre-qualified",
  ];

  const firms = [
    "Studio Design Co.",
    "Interior Elite",
    "Modern Spaces",
    "Design Masters",
  ];

  return (
    <main className="lg:pt-32 pt-24 pb-20 px-8 bg-black text-white">
      <div className="flex lg:flex-row flex-col lg:justify-between items-center lg:gap-10 gap-20">
        <div className="space-y-6">
          <h1 className="font-bold lg:text-6xl text-5xl">
            Connect with Quality{" "}
            <span className="text-primary">Our Design</span> Leads
          </h1>
          <p className="text-xl">
            Get exclusive access to pre-qualified clients actively seeking Our
            Design services. Grow your business with high-intent leads delivered
            directly to you.
          </p>
          <div className="flex items-center gap-4 lg:text-xl text-base">
            <button className="py-4 lg:px-6 px-3 font-bold rounded-md bg-primary cursor-pointer">
              Start Getting Leads
            </button>
            <button className="py-4 lg:px-6 px-3 font-bold rounded-md bg-zinc-700 cursor-pointer">
              How It Works
            </button>
          </div>
        </div>

        <div className="lg:w-[70%] w-full shadow-lg shadow-blue-500/50 border border-blue-600/50 flex flex-col items-center space-y-5 bg-zinc-800 rounded-xl p-8">
          <span className="bg-primary text-center rounded-3xl p-2 px-6 lg:text-lg text-base">
            Average Lead Quality Score: 8.5/10
          </span>
          <div className="space-y-6 w-full">
            {features.map((feature, index) => {
              return (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-md bg-zinc-600"
                >
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                  <span className="lg:text-xl text-base">{feature}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="text-zinc-400 flex lg:flex-row flex-col justify-center gap-6 items-center pt-16">
        <p>Trusted by leading interior design firms:</p>
        <div className="flex lg:gap-6 gap-4">
          {firms.map((f, index) => {
            return (
              <span key={index} className="lg:text-2xl text-lg font-semibold">
                {f}
              </span>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
