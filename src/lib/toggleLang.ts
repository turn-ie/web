export default function toggleLang(
  lang: "en" | "ja",
  setLang: (l: "en" | "ja") => void,
) {
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
}
