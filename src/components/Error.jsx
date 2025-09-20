import Image from "./Image";

export default function Error() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-pink-50 px-2">
      <div className="flex flex-col lg:flex-row items-center gap-12 text-center lg:text-left">
        <div>
          <h1 className="text-9xl font-spicy text-pink-500 drop-shadow-sm">
            404
          </h1>
          <p className="text-4xl font-medium text-gray-700">
            Oops! Page not found.
          </p>
          <p className="mt-2 text-gray-500 text-2xl">
            It looks like the page you’re looking for doesn’t exist.
          </p>
        </div>

        <Image
          image="/images/daisy404.png"
          className="w-64 lg:w-80 drop-shadow-md rounded-3xl"
          alt="daisy 404"
        />
      </div>
    </section>
  );
}
