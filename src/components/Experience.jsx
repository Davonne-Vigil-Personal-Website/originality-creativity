import MyStory from "./MyStory";
import Youtube from "./Youtube";
import { myExperience } from "./data/myExperience";

export default function Experience() {
  return (
    <section className="mt-8 px-4 sm:px-10 lg:px-12 w-full ">
      <h2 className="bg-[url('./images/hoop.jpg)] font-mono text-2xl font-bold">
        Davonne's Latest Work:
      </h2>
      <ul className="flex flex-col gap-8 mt-8">
        {myExperience.map((experience, id) => (
          <li key={id} className="text-xl">
            {experience.project}
            <a
              href={experience.link}
              className="hover:text-blue-400 text-sm font-semibold font-mono"
            >
              (view more)
            </a>
          </li>
        ))}
      </ul>
      <Youtube />

      <MyStory />
    </section>
  );
}
