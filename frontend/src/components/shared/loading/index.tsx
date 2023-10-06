import { useState, useEffect } from "react";

export function Loading() {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prevRotation) => (prevRotation + 45) % 360);
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute h-screen w-screen flex justify-center items-center z-[1100] opacity-[0.7] bg-black">
      <div className="flex flex-col justify-center items-center text-white">
        <div className="relative">
          <div className="Oval w-5 h-5 left-0 top-0 absolute bg-white rounded-full" />
          <div
            className={`Oval w-5 h-5 left-[-30.48px] top-[-30.48px] absolute bg-white rounded-full ${
              rotation === 0 ? "bg-opacity-50" : ""
            }`}
          />
          <div
            className={`Oval w-5 h-5 left-0 top-[-30.48px] absolute bg-white rounded-full ${
              rotation === 45 ? "bg-opacity-50" : ""
            }`}
          />
          <div
            className={`Oval w-5 h-5 left-[32.0px] top-[-30.48px] absolute bg-white rounded-full ${
              rotation === 90 ? "bg-opacity-50" : ""
            }`}
          />
          <div
            className={`Oval w-5 h-5 left-[32.0px] top-0 absolute bg-white rounded-full ${
              rotation === 135 ? "bg-opacity-50" : ""
            }`}
          />
          <div
            className={`Oval w-5 h-5 left-[-30.48px] top-[30.48px] absolute bg-white rounded-full ${
              rotation === 270 ? "bg-opacity-50" : ""
            }`}
          />
          <div
            className={`Oval w-5 h-5 left-[32.0px] top-[30.48px] absolute bg-white rounded-full ${
              rotation === 180 ? "bg-opacity-50" : ""
            }`}
          />
          <div
            className={`Oval w-5 h-5 left-0 top-[30.48px] absolute bg-white rounded-full ${
              rotation === 225 ? "bg-opacity-50" : ""
            }`}
          />
          <div
            className={`Oval w-5 h-5 left-[-30.48px] top-0 absolute bg-white rounded-full ${
              rotation === 315 ? "bg-opacity-50" : ""
            }`}
          />
        </div>
        <div className="mt-[80px] text-amber-400 text-base font-normal font-['Inter']">
          Searching in HelloMovie’s…
        </div>
      </div>
    </div>
  );
}
