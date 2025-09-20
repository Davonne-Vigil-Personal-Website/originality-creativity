import Image from "./Image";

export default function Error() {
  return (
    <section className="flex flex-col lg:flex-row">
      <h1>404</h1>
      {/* image in public/images is available at /images/... when using Vite */}
      <Image image="/images/daisy404.png" className="w-fit" alt="daisy 404" />
    </section>
  );
}
