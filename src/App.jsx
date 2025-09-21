import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
const Header = lazy(() => import("./components/Header"));
const Layout = lazy(() => import("./components/Layout"));
import ContactPage from "./components/ContactPage";
const Error = lazy(() => import("./components/Error"));

function App() {
  return (
    <>
      <Header />
      <Suspense
        fallback={
          <div className="min-h-screen mx-auto font-spicy text-7xl">
            Loading Magic...
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/daisy404" element={<Error />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
