import Image from "./Image";

export default function Error() {
  return (
    <section className="flex flex-col lg:flex-row bg-blue-50">
      <div className="flex-1 flex flex-col justify-center py-8 items-center text-center ">
        <div className="lg:mb-auto lg:mt-60">
          <h1 className="text-8xl md:text-9xl font-spicy text-blue-500 drop-shadow-sm">
            404
          </h1>
          <p className="text-2xl md:text-4xl font-medium text-gray-700">
            Oops! Page not found.
          </p>
          <p className="mt-2 text-gray-500 text-2xl md:text-3xl max-w-lg">
            It looks like the page you’re looking for doesn’t exist.
          </p>

          <Image
            image="/images/daisy2.png"
            className="max-w-sm md:max-w-md mt-20 lg:mt-40  "
            alt="Daisy laying down being funny, background remover from Adobe"
          />
        </div>
      </div>

      <div className="flex-1 w-full h-full">
        <Image
          image="/images/daisy404.png"
          className="w-full h-full object-cover"
          alt="daisy 404, background remover from Adobe"
        />
      </div>
    </section>
  );
}
