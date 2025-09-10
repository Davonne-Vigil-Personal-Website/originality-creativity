import "./App.css";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import SecondColumn from "./components/SecondColumn";

function App() {
  return (
    <main>
      <Header />
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col md:flex-row gap-10">
          <AboutMe />
          <SecondColumn />
        </div>
      </div>
    </main>
  );
}

export default App;
