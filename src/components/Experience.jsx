export default function Experience() {
  const myExperience = [
    { project: "Design to Dev 2025", link: "", id: 0 },
    { project: "For His Purpose Notary", link: "", id: 1 },
    { project: "HabitQuest", link: "", id: 2 },
  ];
  return (
    <section className="mt-8">
      <h2 className="font-mono text-lg font-bold">Davonne's Latest Work</h2>
      {myExperience.map((experience) => (
        <section>
          <p>{experience.project}</p>
        </section>
      ))}
    </section>
  );
}
