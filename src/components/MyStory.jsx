export default function MyStory() {
  const myStory = [
    {
      sectionName: "About Me",
      details: `Vestibulum ultricies quis urna vitae consectetur. Donec dignissim vehicula metus non varius. Vestibulum ornare dictum erat a rhoncus. Sed lobortis suscipit leo vel imperdiet. Duis porta dui vitae mauris venenatis blandit. Interdum et malesuada fames ac ante ipsum primis in faucibus. `,
      id: 0,
    },
    {
      sectionName: "Skills",
      details: `blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah`,
      id: 1,
    },
    {
      sectionName: "Education",
      details: `blah blah blah blah blah blah blah blah blah blah blah blah`,
      id: 2,
    },
  ];
  return (
    <section className="w-full mt-8 bg-white shadow-md">
      <h2 className="bg-black text-white text-xl w-full font-mono mb-4 p-2 rounded-t-lg">
        From Sales to Coding
      </h2>

      {myStory.map((story) => (
        <section key={story.id} className="p-4">
          <div className="flex flex-col">
            <h3 className="text-2xl font-mono">{story.sectionName}</h3>
            <ul>
              <li>{story.details}</li>
            </ul>
          </div>
        </section>
      ))}
    </section>
  );
}
