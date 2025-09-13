import Experience from "./Experience";

export default function SecondColumn() {
  return (
    <section className="w-full">
      <div className="border-2 p-4 lg:p-6 lg:mt-20 bg-[url('./images/hoop3.jpg')] bg-cover bg-center">
        <p className="font-bold text-center mx-auto bg-black w-fit text-white p-1 rounded">
          Davonne is in your extended network
        </p>
      </div>

      <div>
        <Experience />
      </div>
    </section>
  );
}
