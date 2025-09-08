export default function ContactInfo() {
  const waysToContact = [
    { way: "Send Message", link: "", emoji: "💬", id: 0 },
    { way: "Add to Friends", link: "", emoji: "👥", id: 1 },
    { way: "Instant Message", link: "", emoji: "💭", id: 2 },
    { way: "Forward to a Friend", link: "", emoji: "↗️", id: 3 },
    { way: "Add to favorites", link: "", emoji: "⭐", id: 4 },
    { way: "Block User", link: "", emoji: "🚫", id: 5 },
    { way: "Refer User", link: "", emoji: "🤝", id: 6 },
  ];

  return (
    <section className="max-w-xl h-full p-8 bg-white shadow-lg">
      <p className="bg-blue-400 p-2 w-full font-mono mb-4">
        Connecting to Davonne
      </p>
      <ul className="grid grid-cols-2 gap-2">
        {waysToContact.map((contactInfo) => (
          <li key={contactInfo.id} className="flex items-center gap-2">
            <span>{contactInfo.emoji}</span>
            <span>{contactInfo.way}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

//idea do icon for social media on here
