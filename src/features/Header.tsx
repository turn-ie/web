type Props = {
  lang: "en" | "ja";
  onToggle: () => void;
};

export default function Header({ lang, onToggle }: Props) {
  return (
    <header className="static md:fixed top-0 left-0 p-0 md:px-24 w-full md:w-1/2 h-fit md:h-dvh flex flex-col justify-center">
      <div className="flex items-center gap-3 w-full justify-between">
        <h1 className="text-2xl text-accent">turnie</h1>
        <button
          onClick={onToggle}
          className="flex gap-1 text-sm font-bold text-fg-secondary cursor-pointer"
          aria-label="Toggle language"
        >
          <span className={`${lang !== "en" ? "opacity-50" : ""}`}>EN</span>/
          <span className={`${lang === "en" ? "opacity-50" : ""}`}>JA</span>
        </button>
      </div>
      <p className="text-fg-secondary">Passing empathy</p>
    </header>
  );
}
