export default function MyStory() {
  const myStory = [
    {
      sectionName: "About Me",
      details: `Vestibulum ultricies quis urna vitae consectetur. Donec dignissim vehicula metus non varius. Vestibulum ornare dictum erat a rhoncus. Sed lobortis suscipit leo vel imperdiet. Duis porta dui vitae mauris venenatis blandit. Interdum et malesuada fames ac ante ipsum primis in faucibus.`,
      id: 0,
    },
    {
      sectionName: "Skills",
      details: `Leadership, Sales, Management, Community Building, Sales, Generating Monthly Revenue, Relationship Building, The Design Eye.`,
      id: 1,
    },
    {
      sectionName: "Education",
      details: [
        {
          school: "University of Texas at Arlington ",
          // year: "2014-2017",
          degree: "General Studies",
          info: "Studying the subjects Geology, Philosophy, and History. ",
        },
        {
          school: "Tarrant County College",
          // year: "2018-2019",
          degree: "Associate of Arts of Science, Library Technician",
          info: `Always loved books, learning and teaching others. This degree has given me the experience
          I need when it comes to public speaking, and being able to know how to research. Utilizing the tools I have to find the answers I am looking for. `,
        },
        {
          school: "Fullstack Academy",
          // year: " 2023",
          degree: "Certificate in Web Development",
          info: `At TCC found out about coding, and been coding ever since. Then got a new job and joined a coding bootcamp that taught me the skills I need 
          to continue this path to land a role in tech.`,
        },
      ],
      id: 2,
    },
  ];

  return (
    <section className="w-full mt-8 bg-white shadow-md">
      <h2 className="bg-[#28231D] text-white text-xl w-full font-mono mb-4 p-2 rounded-t-lg">
        From Sales to Coding
      </h2>

      {myStory.map((story) => (
        <section key={story.id} className="p-4">
          <div className="flex flex-col">
            <h3 className="text-2xl font-mono">{story.sectionName}</h3>

            {Array.isArray(story.details) ? (
              <ul className="p-2 flex flex-col gap-8">
                {story.details.map((item, index) => (
                  <li key={index} className="list-disc">
                    <p className="font-semibold text-xl">{item.school}</p>
                    <p className="italic text-lg">{item.year}</p>
                    <p className=" italic text-lg">{item.degree}</p>
                    <p className="text-gray-600 text-lg">{item.info}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-2">{story.details}</p>
            )}
          </div>
        </section>
      ))}
    </section>
  );
}
