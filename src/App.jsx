import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
const Header = lazy(() => import("./components/Header"));
const Layout = lazy(() => import("./components/Layout"));
const ContactPage = lazy(() => import("./components/ContactPage"));
const Resume = lazy(() => import("./components/Resume"));
const HireMe = lazy(() => import("./components/HireMe"));
const Error = lazy(() => import("./components/Error"));

function App() {
  return (
    <>
      <Header />
      <Suspense
        fallback={
          <div className="min-h-screen bg-pink-100 flex flex-col text-center justify-center items-center font-mono text-5xl md:text-7xl">
            Loading Magic...
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/daisy404" element={<Error />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/hireMe" element={<HireMe />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
