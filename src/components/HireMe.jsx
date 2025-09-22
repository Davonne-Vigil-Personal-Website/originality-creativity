import * as motion from "motion/react-client";

export default function HireMe() {
  return (
    <section className="bg-[url('/images/hire.jpg')] bg-cover min-h-screen relative">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 4, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="text-white flex flex-col gap-4 shadow-lg p-4 bg-black/20 justify-center items-center"
      >
        <div className="mt-20 flex flex-col gap-8 justify-center items-center ">
          <h2 className="text-4xl md:text-7xl md:mt-20 md:mt-40 font-spicy">
            Thank You So Much
          </h2>
          <p className="text-2xl md:text-4xl text-center font-semibold">
            Lets build something amazing..!
          </p>
          <button className="p-2 w-60 mx-auto  hover:scale-105 transition-all duration-300 ease-in-out rounded-full  bg-gray-100 text-black font-thin cursor-pointer md:text-2xl">
            <a href="https://www.linkedin.com/in/davonnevigil/">
              Connect on LinkedIn
            </a>
          </button>
        </div>
      </motion.div>
    </section>
  );
}
