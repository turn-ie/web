import { useState } from "react";
import bg from "/images/bg.jpg";
import { sections } from "./data/sections";
import { links } from "./data/links";
import { awards } from "./data/awards";
import P5Background from "./components/P5BG";

function App() {
  const [lang, setLang] = useState<"en" | "ja">(() => {
    const path = window.location.pathname || "/";
    return path.startsWith("/ja") ? "ja" : "en";
  });

  const toggleLang = () => {
    const path = window.location.pathname || "/";
    if (lang === "en") {
      const newPath = path === "/" ? "/ja" : `/ja${path}`;
      history.pushState(null, "", newPath);
      setLang("ja");
    } else {
      const newPath = path.startsWith("/ja")
        ? path.replace(/^\/ja/, "") || "/"
        : path;
      history.pushState(null, "", newPath);
      setLang("en");
    }
  };

  return (
    <div className="w-full h-full min-h-dvh mx-auto p-6 text-sm  relative">
      <P5Background />
      <header className="static md:fixed top-0 left-0 p-0 md:px-24 w-full md:w-1/2 h-fit md:h-dvh flex flex-col justify-center">
        <div className="flex items-center gap-3 w-full justify-between">
          <h1 className="text-2xl text-accent">turnie</h1>
          <button
            onClick={toggleLang}
            className="flex gap-1 text-sm font-bold text-fg-secondary cursor-pointer"
            aria-label="Toggle language"
          >
            <span className={`${lang !== "en" ? "opacity-50" : ""}`}>EN</span>/
            <span className={`${lang === "en" ? "opacity-50" : ""}`}>JA</span>
          </button>
        </div>
        <p className="text-fg-secondary">Passing empathy</p>
      </header>
      <div className="flex gap-6 flex-col py-0 md:py-6 md:flex-row">
        <div className="w-full" />
        <div className="w-full flex flex-col gap-8">
          {/* details */}
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
          <section className="flex flex-col gap-3">
            <h2>Awards</h2>
            <div className="flex flex-col gap-6">
              {awards.map((award) => (
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
                  <img
                    src={award.image}
                    alt={award.title[lang] ?? award.title.en}
                    className={
                      "min-w-60 w-full aspect-square object-cover overflow-hidden rounded-2xl"
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
                    <a href={award.page.url} className="underline">
                      {award.page.title[lang] ?? award.page.title.en}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
          <section className="relative w-full h-fit overflow-hidden rounded-2xl">
            <img
              src={bg}
              alt="main bg"
              className="absolute -z-1 top-0 left-0 w-full h-full object-cover"
            />
            <header className="p-6 text-white flex flex-col gap-12 sm:flex-row w-full h-full justify-between">
              <h2>Get in touch with us</h2>
              <div className="flex flex-col gap-3">
                {links.map((link) => (
                  <a
                    href={link.url}
                    target="_blank"
                    className="hover:underline"
                  >
                    {link.title}
                  </a>
                ))}
              </div>
            </header>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
