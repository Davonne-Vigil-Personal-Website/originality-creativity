import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [selected, setSelected] = useState("internet");

  return (
    <header>
      <div className="bg-blue-500 w-full p-4 flex flex-col md:flex-row justify-between">
        <Link to="/" className="font-mono  ml-8 hover:text-blue-50">
          davonnesSite.vercel | Home 🐶
        </Link>
        {/* <div className="font-mono hidden md:flex text-lg gap-4 ">
          <label>
            <input
              type="radio"
              id="internet"
              name="site"
              value="internet"
              checked={selected === "internet"}
              onChange={(e) => setSelected(e.target.value)}
            />{" "}
            The Internet
          </label>
          <label>
            <input
              type="radio"
              id="space"
              name="site"
              value="space"
              checked={selected === "space"}
              onChange={(e) => setSelected(e.target.value)}
            />{" "}
            Davonne's Space
          </label>
        </div>*/}
      </div>
      <div className="bg-blue-500 w-full p-4"></div>
    </header>
  );
}
