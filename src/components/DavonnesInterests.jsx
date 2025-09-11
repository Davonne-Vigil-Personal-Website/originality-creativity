import React from "react";

export default function DavonnesInterests() {
  const general = [
    {
      title: "General Info",
      items: [
        "Web Development",
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "Git",
        "Github",
        "Node.js",
        "React.js",
        "Express.js",
        "SQL",
        "Postgresql",
        "Tailwind CSS",
        "Figma",
        "Canva",
        "ShadCN",
        "GSAP",
        "Material UI",
        "Daisy UI",
      ],
    },
    {
      title: "Interests",
      items: [
        "Framer",
        "Next.js",
        "React Native",
        "The Java Ecosystem",
        "AI",
        "AWS",
        "Kotlin",
        "C#/.Net",
        "Python",
        "Cloud",
        "Machine Learning",
      ],
    },
    {
      title: "Music Vibes",
      items: [
        "Nostalgia 2000's Hip Hop",
        "Rock",
        "Rap",
        "Miley Cyrus",
        "Jojo",
        "The Jonas Brothers",
        "Elvis Presley",
        "Prince",
        "Eminem",
        "Avril Lavigne",
        "Micheal Jackson",
        "Linkin Park",
        "Blink 182",
        "Good Charlotte",
      ],
    },
  ];

  return (
    <section className="max-w-lg bg-blue-100 shadow-lg mt-10 rounded-lg overflow-hidden">
      <p className="bg-blue-400 w-full font-mono mb-4 p-2">
        Davonne's Interests
      </p>

      {general.map((category, index) => (
        <section key={index} className="mb-4 p-2">
          <div className="flex flex-col lg:flex-row gap-4 items-stretch">
            <p className="font-bold bg-blue-300 px-3 py-2 flex items-center justify-center rounded-lg min-w-[120px]">
              {category.title}
            </p>

            <ul className="flex flex-wrap gap-2 bg-blue-200 rounded-lg p-2 flex-1">
              {category.items.map((item, i) => (
                <li
                  key={i}
                  className="bg-white rounded px-2 py-1 shadow-sm text-sm"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}
    </section>
  );
}
