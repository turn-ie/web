import bg from "/images/bg.png"
import { sections } from "./data/sections"
import { links } from "./data/links"
import P5Background from "./components/P5BG"

function App() {
  return (
    <div className="w-full h-full min-h-dvh mx-auto p-6 text-sm  relative">
      <P5Background />
      <header className="static md:fixed top-0 left-0 p-0 md:px-24 w-fit h-fit md:h-dvh flex flex-col justify-center">
        <h1 className="text-2xl text-accent">
          turnie
        </h1>
        <p className="text-fg-secondary">Passing empathy</p>
      </header>
      <div className="flex gap-6 flex-col py-0 md:py-6 md:flex-row">
        <div className="w-full" />
        <div className="w-full flex flex-col gap-8">
          {sections.map((section) => (
            <section
              key={section.title}
              className="flex flex-col relative sm:flex-row gap-3 sm:gap-6"
            >
              <header className="w-full py-0 md:p-3 order-0 sm:order-1">
                <h2>{section.title}</h2>
                <p className="whitespace-pre-line">{section.description.en}</p>
                {/* <p className="whitespace-pre-line">{section.description.ja}</p> */}
              </header>
              {section.video
                ? <video
                  src={section.video}
                  poster={section.image}
                  autoPlay
                  muted
                  playsInline
                  loop
                  className={`w-full h-auto aspect-4/3 object-cover overflow-hidden rounded-2xl ${section.reverse ? "order-2" : "order-0"
                    }`}
                />
                : <img
                  src={section.image}
                  alt={section.title}
                  className={`w-full h-auto aspect-4/3 object-cover overflow-hidden rounded-2xl ${section.reverse ? "order-2" : "order-0"}`}
                />
              }
            </section>
          ))}
          <section className="relative w-full h-fit overflow-hidden rounded-2xl">
            <img
              src={bg}
              alt="main bg"
              className="absolute -z-1 top-0 left-0 w-full h-full object-cover"
            />
            <header className="p-6 text-white flex flex-col gap-12 sm:flex-row w-full h-full justify-between">
              <h2>
                Get in touch with us
              </h2>
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
  )
}

export default App
