import { awards } from "../data/awards";

export default function Awards({ lang }: { lang: "en" | "ja" }) {
  return (
    <section className="flex flex-col gap-3">
      <h2>Awards</h2>
      <div className="flex flex-col gap-6">
        {awards.map((award) => (
          <div
            className="flex flex-col sm:flex-row gap-3 sm:gap-6"
            key={
              (award.title && (award.title.en || award.title.ja)) + award.date
            }
          >
            <img
              src={award.image}
              alt={award.title[lang] ?? award.title.en}
              className={
                "w-full sm:w-60 aspect-square object-cover overflow-hidden rounded-2xl shrink-0"
              }
            />
            <div className="flex flex-col gap-1 p-0 sm:py-3">
              <p className="text-xs">{award.date}</p>
              <h2>{award.title[lang] ?? award.title.en}</h2>
              <div></div>
              <p className="text-accent font-bold">
                {award.prize[lang] ?? award.prize.en}
              </p>
              <p className="whitespace-pre-line">
                {award.description[lang] ?? award.description.en}
              </p>
              <a href={award.page.url} target="_blank" className="underline">
                {award.page.title[lang] ?? award.page.title.en}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
