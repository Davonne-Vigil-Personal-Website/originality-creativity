import "./App.css";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import SecondColumn from "./components/SecondColumn";

function App() {
  return (
    <main>
      <Header />
      <div className="flex flex-col lg:flex-row justify-center items-center">
        <AboutMe />
        <SecondColumn />
      </div>
    </main>
  );
}

export default App;
