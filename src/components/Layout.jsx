import AboutMe from "./AboutMe";
import SecondColumn from "./SecondColumn";
import Footer from "./Footer";

export default function Layout() {
  return (
    <>
      <section className="flex flex-col justify-center items-center mt-10">
        <div className="flex flex-col lg:flex-row gap-20 w-full bg-blue-100 max-w-6xl border-6 rounded-2xl border-blue-500 mt-8">
          <AboutMe className="flex-1" />
          <SecondColumn className="flex-1" />
        </div>
      </section>

      <Footer />
    </>
  );
}
