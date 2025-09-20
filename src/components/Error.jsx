import Image from "./Image";

export default function Error() {
  return (
    <section className="flex flex-col lg:flex-row bg-pink-50">
      <div className="flex-1 flex flex-col justify-center py-8 items-center text-center ">
        <div className="lg:mb-96">
          <h1 className="text-8xl md:text-9xl font-spicy text-pink-500 drop-shadow-sm">
            404
          </h1>
          <p className="text-2xl md:text-4xl font-medium text-gray-700">
            Oops! Page not found.
          </p>
          <p className="mt-2 text-gray-500 text-xl md:text-2xl max-w-lg">
            It looks like the page you’re looking for doesn’t exist.
          </p>
        </div>
      </div>

      <div className="flex-1 w-full h-full">
        <Image
          image="/images/daisy404.png"
          className="w-full h-full object-cover"
          alt="daisy 404"
        />
      </div>
    </section>
  );
}
