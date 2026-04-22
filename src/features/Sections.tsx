import { sections } from "../data/sections";
export default function Sections({ lang }: { lang: "en" | "ja" }) {
  return (
    <div>
      {sections.map((section) => (
        <section
          key={section.title}
          className="flex flex-col relative sm:flex-row gap-3 sm:gap-6"
        >
          <header className="w-full py-0 md:p-3 order-0 sm:order-1">
            <h2>{section.title}</h2>
            <p className="whitespace-pre-line">
              {section.description[lang] ?? section.description.en}
            </p>
          </header>
          {section.video ? (
            <video
              src={section.video}
              poster={section.image}
              autoPlay
              muted
              playsInline
              loop
              className={`w-full h-auto aspect-4/3 object-cover overflow-hidden rounded-2xl ${
                section.reverse ? "order-2" : "order-0"
              }`}
            />
          ) : (
            <img
              src={section.image}
              alt={section.title}
              className={`w-full h-auto aspect-4/3 object-cover overflow-hidden rounded-2xl ${section.reverse ? "order-2" : "order-0"}`}
            />
          )}
        </section>
      ))}
    </div>
  );
}
