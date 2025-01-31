"use client";
import CountUp from "react-countup";

export default function CounterSection() {
  const counters = [
    { title: "Years in Business", value: 5 },
    { title: "Completed Projects", value: 50 },
    { title: "Reviews", value: 4.8 },
    { title: "TeamWorks", value: 20 },
  ];

  return (
    <div className="w-full bg-white text-black py-16 flex justify-center">
      <div className="container mx-auto flex flex-wrap justify-around gap-12">
        {counters.map((counter, index) => (
          <div key={index} className="text-center">
            <h2 className="text-5xl font-bold text-blue-400">
              <CountUp start={0} end={counter.value} duration={3} decimals={counter.title === "Reviews" ? 1 : 0} />
              {counter.title === "Reviews" ? "⭐" : "+"}
            </h2>
            <p className="text-lg text-black mt-2 uppercase font-bold">{counter.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
