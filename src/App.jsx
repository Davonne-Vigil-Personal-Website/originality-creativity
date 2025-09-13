import "./App.css";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import SecondColumn from "./components/SecondColumn";
import Footer from "./components/Footer";

function App() {
  return (
    <main>
      <Header />

      <section className="flex flex-col justify-center items-center">
        <div className="flex flex-col lg:flex-row gap-20 w-full max-w-6xl">
          <AboutMe className="flex-1" />

          <SecondColumn className="flex-1" />
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default App;
