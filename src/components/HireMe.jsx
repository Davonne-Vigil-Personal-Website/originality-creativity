import React from "react";

export default function HireMe() {
  return (
    <section className="bg-[url('/images/fireworks.jpg')] bg-cover min-h-screen relative">
      <div className="text-white flex flex-col gap-4 justify-center items-center">
        <h2 className="text-3xl md:text-6xl mt-20 md:mt-40 font-mono">
          Thank You So Much
        </h2>
        <p className="text-xl md:text-3xl">Lets build something amazing..!</p>
        <button className="p-2 mt-4 hover:scale-105 transition-all duration-300 ease-in-out  bg-gray-300 text-black font-mono cursor-pointer text-xl">
          <a href="https://www.linkedin.com/in/davonnevigil/">
            Connect on LinkedIn
          </a>
        </button>
      </div>
    </section>
  );
}
