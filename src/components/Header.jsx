import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="bg-blue-500 w-full p-2 flex">
        <Link
          to="/"
          className="font-mono ml-8 hover:text-blue-50 flex items-center justify-center text-xl"
        >
          Originality, Creativity | 🐶
        </Link>
      </div>
      <div className="bg-blue-500 w-full p-4"></div>
    </header>
  );
}
