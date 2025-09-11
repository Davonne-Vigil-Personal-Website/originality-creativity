import Experience from "./Experience";

export default function SecondColumn() {
  return (
    <section className="w-full">
      <div className="border-2 p-4 lg:p-6 lg:mt-20">
        <p className="font-bold w-full text-center">
          Davonne is in your extended network
        </p>
      </div>

      <div>
        <Experience />
      </div>
    </section>
  );
}
