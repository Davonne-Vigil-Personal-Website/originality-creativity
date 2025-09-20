import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-pink-300 via-pink-400 to-black p-8 font-mono text-lg">
      <Link to="/" className="text-white">
        davonnesSite.vercel | 🐶
      </Link>
    </header>
  );
}
