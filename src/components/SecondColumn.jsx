import Experience from "./Experience";

export default function SecondColumn() {
  return (
    <section>
      <div className="border-2 p-4 lg:p-6 w-full lg:mt-20">
        <p className="font-bold w-full">Davonne is in your extended network</p>
      </div>

      <div>
        <Experience />
      </div>
    </section>
  );
}
