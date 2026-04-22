import bg from "/images/bg.jpg";
import { links } from "../data/links";

export default function Links() {
  return (
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
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              {link.title}
            </a>
          ))}
        </div>
      </header>
    </section>
  );
}
