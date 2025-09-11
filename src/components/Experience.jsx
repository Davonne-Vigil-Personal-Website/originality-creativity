export default function Experience() {
  const myExperience = [
    { project: "Davonne's Disney Inspired Portfolio", link: "", id: 0 },
    { project: "Design to Dev 2025", link: "", id: 1 },
    { project: "For His Purpose Notary", link: "", id: 2 },
    { project: "HabitQuest", link: "", id: 3 },
    { project: "Our Space", link: "", id: 4 },
  ];
  return (
    <section className="mt-8">
      <h2 className="font-mono text-lg font-bold">Davonne's Latest Work:</h2>
      <ul className="flex flex-col gap-8 mt-8">
        {myExperience.map((experience, id) => (
          <li key={id}>
            {experience.project}
            <a href={experience.link} className="font-bold font-mono">
              (view more)
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
