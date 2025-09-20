import { useNavigate } from "react-router-dom";

export default function ContactInfo() {
  const navigate = useNavigate();

  const waysToContact = [
    { way: "Send Message", path: "", emoji: "💬", id: 0 }, // Internal route
    {
      way: "Add to Friends",
      link: "https://www.linkedin.com/in/davonnevigil/", // External URL
      emoji: "👥",
      id: 1,
    },
    { way: "Instant Message", path: "", emoji: "💭", id: 2 }, // Internal route
    { way: "Forward to a Friend", path: "/resume", emoji: "↗️", id: 3 }, // Internal route
    {
      way: "Add to favorites",
      link: "https://x.com/davonne007", // External URL
      emoji: "⭐",
      id: 4,
    },
    { way: "Block User", path: "/daisy404", emoji: "🚫", id: 5 }, // Internal route
    {
      way: "Refer User",
      link: "https://www.linkedin.com/in/davonnevigil/", // External URL
      emoji: "🤝",
      id: 6,
    },
    {
      way: "Hire User",
      link: "https://www.linkedin.com/in/davonnevigil/", // External URL
      emoji: "🤝",
      id: 7,
    },
  ];

  const handleNavigation = (contactInfo) => {
    if (contactInfo.path) {
      navigate(contactInfo.path);
    } else if (contactInfo.link) {
      window.open(contactInfo.link, "_blank");
    }
  };

  return (
    <section className="max-w-lg bg-white shadow-lg mt-8">
      <p className="bg-[#28231D] text-lg w-full font-mono mb-4 p-2 text-white">
        Connecting to Davonne
      </p>
      <ul className="grid grid-cols-2 gap-2">
        {waysToContact.map((contactInfo) => (
          <li
            key={contactInfo.id}
            className="flex items-center gap-2 p-2 md:text-lg"
          >
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

//idea do icon for social media on here
