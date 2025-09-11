export default function Experience() {
  const myExperience = [
    { project: "Davonne's Disney Inspired Portfolio", link: "", id: 0 },
    {
      project: "2025 UI Projects",
      link: "https://dev-by-design.vercel.app/",
      id: 1,
    },
    {
      project: "For His Purpose Notary Services",
      link: "https://www.forhispurposenotaryservice.com/",
      id: 2,
    },
    {
      project: "HabitQuest",
      link: "https://habit-quest-collab.vercel.app/",
      id: 3,
    },
    { project: "Our Space", link: "https://our-space-omega.vercel.app", id: 4 },
  ];
  return (
    <section className="mt-8">
      <h2 className="font-mono text-lg font-bold">Davonne's Latest Work:</h2>
      <ul className="flex flex-col gap-8 mt-8">
        {myExperience.map((experience, id) => (
          <li key={id}>
            {experience.project}
            <a
              href={experience.link}
              className="hover:text-blue-500 font-bold font-mono"
            >
              (view more)
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
