import Experience from "./Experience";
import MyStory from "./MyStory";

export default function SecondColumn() {
  return (
    <section className="w-full p-8">
      <div className="border-2 p-4 lg:p-6  bg-[url('./images/hoop.jpg')] bg-cover bg-center">
        <p className="font-bold text-center mx-auto bg-black w-fit text-white p-1 rounded shadow-2xl">
          Davonne is in your extended network
        </p>
      </div>

      <Experience />
    </section>
  );
}
