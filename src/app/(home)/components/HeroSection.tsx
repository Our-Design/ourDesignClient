"use client";
// import Link from "next/link";
import React, { useEffect, useState } from "react";

const HeroSection = () => {
  // const features = [
  //   "15+ new leads daily",
  //   "Verified contact information",
  //   "Project budget pre-qualified",
  // ];

  // const firms = [
  //   "Studio Design Co.",
  //   "Interior Elite",
  //   "Modern Spaces",
  //   "Design Masters",
  // ];

  const numbers = [
    {
      number: 27000,
      label: "#OurdesignHomes",
      includePlus: true,
    },
    {
      number: 800,
      label: "designers",
      includePlus: true,
    },
    {
      number: 4,
      label: "cities",
      includePlus: false,
    },
    {
      number: 1,
      label: "country",
      includePlus: false,
    },
  ];

  // Animated numbers state
  const [animatedNumbers, setAnimatedNumbers] = useState(numbers.map(() => 0));

  useEffect(() => {
    const durations = [1200, 1000, 800, 800]; // ms for each number
    const intervals = [10, 10, 20, 40]; // ms for each number's interval
    const steps = numbers.map((item, i) =>
      Math.ceil(item.number / (durations[i] / intervals[i]))
    );
    const current = [...animatedNumbers];
    const timers = numbers.map((item, i) => {
      return setInterval(() => {
        current[i] += steps[i];
        if (current[i] >= item.number) {
          current[i] = item.number;
          setAnimatedNumbers([...current]);
          clearInterval(timers[i]);
        } else {
          setAnimatedNumbers([...current]);
        }
      }, intervals[i]);
    });
    return () => timers.forEach((t) => clearInterval(t));
    // eslint-disable-next-line
  }, []);

  return (
    <main className="  mb- lg:pt-32 pt-24 lg:pb-52 pb-[400px] px-8 bg-secondary relative bg-[url('https://library.elementor.com/real-estate-flexbox/wp-content/uploads/sites/295/2020/05/Hero.png')] bg-cover max-lg:bg-center">
      <div className="flex lg:flex-row flex-col lg:justify-between items-center lg:gap-10 gap-20">
        <div className="space-y-6 lg:w-1/2">
          <h1 className="font-bold uppercase lg:text-6xl text-5xl">
            Connect with <span className="text-primary">Quality Leads</span>{" "}
            with us
          </h1>
          <p className="text-xl lg:text-accent text-primary">
            Get exclusive access to pre-qualified clients actively seeking Our
            Design services. Grow your business with high-intent leads delivered
            directly to you.
          </p>
          {/* <div className="flex items-center gap-4 lg:text-xl text-base">
            <Link
              href="/dashboard"
              className="lg:py-4 shadow-lg py-3 lg:px-6 px-3 font-bold text-white rounded-md bg-primary cursor-pointer"
            >
              Start Getting Leads
            </Link>
            <Link
              href="/enquire"
              className="lg:py-4 shadow-lg py-3 lg:px-6 px-3 font-bold rounded-md bg-soft text-foreground cursor-pointer"
            >
              Need a designer?
            </Link>
          </div> */}
        </div>

        {/* <div className="lg:w-[70%] w-full shadow-lg shadow-blue-500/50 border-2 border-blue-600/50 flex flex-col items-center space-y-5 rounded-xl p-8">
          <span className="bg-primary text-white text-center rounded-3xl p-2 px-6 lg:text-lg text-base">
            Average Lead Quality Score: 8.5/10
          </span>
          <div className="space-y-6 w-full">
            {features.map((feature, index) => {
              return (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-md bg-soft shadow-lg"
                >
                  <div className="w-2 h-2 rounded-full bg-green-700" />
                  <span className="lg:text-xl text-base">{feature}</span>
                </div>
              );
            })}
          </div>
        </div> */}
      </div>

      {/* <div className="text-zinc-400 absolute bottom-0 left-1/2 lg:w-[80%] w-[90%] -translate-x-1/2 translate-y-[50%] bg-white shadow-lg border-gray-200 border flex lg:flex-row flex-col justify-center gap-6 items-center lg:p-12 p-8">
        <p className="text-center max-lg:text-sm">
          Trusted by leading interior design firms:
        </p>
        <div className="flex lg:gap-6 gap-4">
          {firms.map((f, index) => {
            return (
              <span key={index} className="lg:text-2xl text-base font-semibold">
                {f}
              </span>
            );
          })}
        </div>
        </div> */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[50%] bg-white shadow-lg border-gray-200 border lg:w-[80%] w-[90%] p-10 rounded-xl flex flex-col items-center gap-10">
        <p className="lg:text-3xl text-2xl text-center text-primary font-bold">
          Let our numbers do the talking!
        </p>
        <div className="flex lg:flex-row flex-col lg:gap-20 gap-8 lg:text-2xl text-lg font-semibold text-primary">
          {numbers.map((item, index) => {
            return (
              <div key={index} className="flex flex-col items-center">
                <span className="lg:text-5xl text-4xl font-bold">
                  {animatedNumbers[index].toLocaleString()}
                  {item.includePlus && "+"}
                </span>
                <span className="text-lg">{item.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
