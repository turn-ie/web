import { useState } from "react";
import Links from "./features/Links";
import P5Background from "./components/P5BG";
import Sections from "./features/Sections";
import Awards from "./features/Awards";
import Header from "./features/Header";
import toggleLang from "./lib/toggleLang";

function App() {
  const [lang, setLang] = useState<"en" | "ja">(() => {
    const path = window.location.pathname || "/";
    return path.startsWith("/ja") ? "ja" : "en";
  });

  const handleToggleLang = () => toggleLang(lang, setLang);

  return (
    <div className="w-full h-full min-h-dvh mx-auto p-6 text-sm  relative">
      <P5Background />
      <Header lang={lang} onToggle={handleToggleLang} />
      <div className="flex gap-6 flex-col py-0 md:py-6 md:flex-row">
        <div className="w-full" />
        <div className="w-full flex flex-col gap-8">
          <Sections lang={lang} />
          <Awards lang={lang} />
          <Links />
        </div>
      </div>
    </div>
  );
}

export default App;
