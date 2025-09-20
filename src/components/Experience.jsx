import MyStory from "./MyStory";

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
    <section className="mt-8 px-4 sm:px lg:px-12 ">
      <h2 className="bg-[url('./images/hoop.jpg)] font-mono text-2xl font-bold">
        Davonne's Latest Work:
      </h2>
      <ul className="flex flex-col gap-8 mt-8">
        {myExperience.map((experience, id) => (
          <li key={id} className="text-xl">
            {experience.project}
            <a
              href={experience.link}
              className="hover:text-pink-400 text-sm font-semibold font-mono"
            >
              (view more)
            </a>
          </li>
        ))}
      </ul>

      <MyStory />
    </section>
  );
}
