import { general } from "./data/general";

export default function DavonnesInterests() {
  return (
    <section className="max-w-lg bg-blue-100 shadow-lg mt-10 rounded-lg overflow-hidden">
      <p className="bg-[#28231D] text-white w-full font-mono mb-4 p-2 text-lg">
        Davonne's Interests
      </p>

      {general.map((category, index) => (
        <section key={index} className="mb-4 p-2">
          <div className="flex flex-col lg:flex-row gap-4 items-stretch">
            <p className="font-bold bg-blue-400 px-3 py-2 flex items-center justify-center rounded-lg min-w-[120px]">
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
