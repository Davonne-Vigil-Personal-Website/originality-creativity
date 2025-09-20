import AboutMe from "./AboutMe";
import SecondColumn from "./SecondColumn";
import Footer from "./Footer";

export default function Layout() {
  return (
    <>
      <section className="flex flex-col justify-center items-center">
        <div className="flex flex-col lg:flex-row gap-20 w-full bg-pink-50 max-w-6xl border-6 rounded-2xl border-pink-400 mt-8">
          <AboutMe className="flex-1" />
          <SecondColumn className="flex-1" />
        </div>
      </section>

      <Footer />
    </>
  );
}
