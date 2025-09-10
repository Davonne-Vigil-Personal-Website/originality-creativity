import React from "react";

export default function DavonnesInterests() {
  const general = [
    {
      title: "General Info",
      items: [
        "HTML",
        "CSS",
        "JavaScript",
        "Node.js",
        "React.js",
        "Express.js",
        "Tailwind CSS",
        "ShadCN",
        "Dogs",
        "Music",
        "Movies",
        "Basketball",
        "Video Games",
        "Call of Duty",
        "Singing",
        "Coding",
      ],
    },
    {
      title: "Music Vibes",
      items: [
        "Old school",
        "hip hop",
        "punk rock",
        "classical",
        "T-Pain",
        "Eminem",
      ],
    },
  ];

  return (
    <section className="max-w-lg bg-blue-100 shadow-lg mt-8 rounded-lg overflow-hidden">
      <p className="bg-blue-400 w-full font-mono mb-4 p-2">
        Davonne's Interests
      </p>

      {general.map((category, index) => (
        <section key={index} className="mb-4 p-2">
          <div className="flex gap-4 items-stretch">
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
