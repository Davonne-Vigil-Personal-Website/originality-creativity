import { useNavigate } from "react-router-dom";
import { waysToContact } from "./data/waysToContact";

export default function ContactInfo() {
  const navigate = useNavigate();

  const handleNavigation = (contactInfo) => {
    if (contactInfo.path && contactInfo.path.trim() !== "") {
      navigate(contactInfo.path);
    } else if (contactInfo.link) {
      window.open(contactInfo.link, "_blank");
    } else {
      console.info(`No route configured for: ${contactInfo.way}`);
    }
  };

  return (
    <section className="max-w-lg bg-white shadow-lg mt-8">
      <p className="bg-[#28231D] text-lg w-full font-mono mb-4 p-2 text-white">
        Connecting to Davonne
      </p>
      <ul className="grid grid-cols-2 md:gap-2">
        {waysToContact.map((contactInfo) => (
          <li key={contactInfo.id} className="flex gap-2 p-2 md:text-lg">
            <span>{contactInfo.emoji}</span>
            <button
              onClick={() => handleNavigation(contactInfo)}
              className="cursor-pointer hover:text-pink-300"
            >
              {contactInfo.way}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
