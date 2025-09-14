export default function ContactInfo() {
  const waysToContact = [
    { way: "Send Message", link: "", emoji: "💬", id: 0 }, //portfolio disney
    {
      way: "Add to Friends",
      link: "https://www.linkedin.com/in/davonnevigil/",
      emoji: "👥",
      id: 1,
    },
    { way: "Instant Message", link: "", emoji: "💭", id: 2 },
    { way: "Forward to a Friend", link: "", emoji: "↗️", id: 3 }, //resume
    {
      way: "Add to favorites",
      link: "https://x.com/davonne007",
      emoji: "⭐",
      id: 4,
    },
    { way: "Block User", link: "", emoji: "🚫", id: 5 }, //404 page
    {
      way: "Refer User",
      link: "https://www.linkedin.com/in/davonnevigil/",
      emoji: "🤝",
      id: 6,
    },
    {
      way: "Hire User",
      link: "https://www.linkedin.com/in/davonnevigil/",
      emoji: "🤝",
      id: 7,
    },
  ];

  return (
    <section className="max-w-lg bg-white shadow-lg mt-8">
      <p className="bg-blue-400 text-lg w-full font-mono mb-4 p-2">
        Connecting to Davonne
      </p>
      <ul className="grid grid-cols-2 gap-2">
        {waysToContact.map((contactInfo) => (
          <li
            key={contactInfo.id}
            className="flex items-center gap-2 p-2 md:text-lg"
          >
            <span>{contactInfo.emoji}</span>
            <a
              href={contactInfo.link}
              className="cursor-pointer hover:text-blue-600"
            >
              {contactInfo.way}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

//idea do icon for social media on here
