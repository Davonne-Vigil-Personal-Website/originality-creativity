import Image from "./Image";

export default function Error() {
  return (
    <section className="flex flex-col lg:flex-row">
      <h1>404</h1>
      <Image image="./images/daisy404.png" className="w-fit" />
    </section>
  );
}
