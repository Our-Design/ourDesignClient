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
    <main className="pt-32 pb-20 px-8">
      <div className="flex justify-between items-center gap-10">
        <div className="space-y-6">
          <h1 className="font-bold text-6xl">
            Connect with Quality{" "}
            <span className="text-primary">Our Design</span> Leads
          </h1>
          <p className="text-xl">
            Get exclusive access to pre-qualified clients actively seeking Our
            Design services. Grow your business with high-intent leads delivered
            directly to you.
          </p>
          <div className="flex items-center gap-4">
            <button className="py-4 text-xl px-6 font-bold rounded-md bg-primary cursor-pointer">
              Start Getting Leads
            </button>
            <button className="py-4 text-xl px-6 font-bold rounded-md bg-zinc-700 cursor-pointer">
              How It Works
            </button>
          </div>
        </div>

        <div className="w-[70%] flex flex-col items-center space-y-5 bg-zinc-800 rounded-xl p-8">
          <span className="bg-primary rounded-3xl p-2 px-6 text-lg">
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
                  <span className="text-xl">{feature}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="text-zinc-400 flex justify-center gap-6 items-center pt-16">
        <p>Trusted by leading interior design firms:</p>
        {firms.map((f, index) => {
          return (
            <span key={index} className="text-2xl font-semibold">
              {f}
            </span>
          );
        })}
      </div>
    </main>
  );
};

export default HeroSection;
