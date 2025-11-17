"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const HeroSection = () => {
  const numbers = [
    {
      number: 27000,
      label: "Homes Connected",
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
    <main className="mb- lg:pt-32 pt-24 lg:pb-52 pb-[400px] px-8 bg-secondary relative bg-[url('https://library.elementor.com/real-estate-flexbox/wp-content/uploads/sites/295/2020/05/Hero.png')] bg-cover max-lg:bg-center">
      {/* Elegant overlay for contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/35 to-black/50"></div>

      <div className="flex flex-col items-center justify-center text-center gap-8 max-w-5xl mx-auto relative z-10">
        <div className="space-y-6">
          <h1 className="font-semibold lg:text-6xl text-4xl text-white drop-shadow-2xl tracking-tight">
            Transform Your Space with{" "}
            <span className="text-primary font-bold drop-shadow-2xl ">
              INDIA&apos;S LEADING
            </span>{" "}
            Interior Design Platform
          </h1>
          <p className="text-lg lg:text-xl text-white/90 max-w-3xl mx-auto drop-shadow-lg font-light leading-relaxed">
            Connecting homeowners with verified interior designers. Get your
            dream home designed or grow your design business with quality leads.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 lg:text-lg text-base mt-4">
          <Link
            href="/enquire"
            className="lg:py-4 py-3 lg:px-10 px-8 font-medium text-white bg-primary rounded-lg bg-primary/90 backdrop-blur-sm cursor-pointer hover:bg-primary transition-all shadow-xl border border-white/20  "
          >
            Get Free Consultation
          </Link>
          <Link
            href="/dashboard"
            className="lg:py-4 py-3 lg:px-10 px-8 font-medium rounded-lg bg-white/95 backdrop-blur-sm text-primary cursor-pointer hover:bg-white transition-all shadow-xl border border-primary/20"
          >
            For Designers - Join Now
          </Link>
        </div>

        <div className="flex flex-wrap justify-center gap-4 lg:gap-6 mt-8 text-sm lg:text-base text-white/90 drop-shadow-lg">
          <div className="flex items-center gap-2 bg-white/5 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/10">
            <span className="text-amber-300/80 text-lg">✓</span>
            <span className="font-light">27,000+ Homes Designed</span>
          </div>
          <div className="flex items-center gap-2 bg-white/5 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/10">
            <span className="text-amber-300/80 text-lg">✓</span>
            <span className="font-light">800+ Verified Designers</span>
          </div>
          <div className="flex items-center gap-2 bg-white/5 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/10">
            <span className="text-amber-300/80 text-lg">✓</span>
            <span className="font-light">100% Satisfaction Guaranteed</span>
          </div>
        </div>
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
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[50%] bg-white/98 backdrop-blur-sm shadow-2xl border border-gray-100 lg:w-[85%] w-[95%] lg:p-12 p-6 rounded-2xl flex flex-col items-center lg:gap-10 gap-6 z-20">
        <p className="lg:text-2xl text-lg text-center text-gray-700 font-light tracking-wide">
          Let our numbers speak for themselves
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 lg:gap-16 gap-6 w-full lg:text-2xl text-base text-gray-800">
          {numbers.map((item, index) => {
            return (
              <div key={index} className="flex flex-col items-center gap-2">
                <span className="lg:text-5xl text-3xl font-light text-primary">
                  {animatedNumbers[index].toLocaleString()}
                  {item.includePlus && "+"}
                </span>
                <span className="lg:text-base text-xs text-center text-gray-600 font-light uppercase tracking-wider">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
