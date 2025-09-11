import "./App.css";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import SecondColumn from "./components/SecondColumn";

function App() {
  return (
    <main>
      <Header />
      <div className="max-w-7xl">
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col lg:flex-row gap-20">
            <AboutMe />
            <SecondColumn />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
