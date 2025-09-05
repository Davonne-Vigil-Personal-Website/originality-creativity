import Image from "./Image";

export default function AboutMe() {
  return (
    <section className="p-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="font-bold text-2xl">Davonne Vigil</h1>
          <Image image="./images/davonne.png" className="max-w-xs rounded-xl" />
        </div>
        <div className="flex flex-col md:mt-20">
          <p>Female</p>
          <p>31 years old</p>
        </div>
      </div>
    </section>
  );
}
