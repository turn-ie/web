import hackaward from "/images/hackaward.jpg";
import sf from "/images/sf.jpg";

export const awards = [
  {
    title: {
      en: "WIRED Creative Hack Award 2025",
      ja: "WIRED Creative Hack Award 2025",
    },
    date: "2025-12",
    prize: {
      en: "Finalist",
      ja: "ファイナリスト",
    },
    description: {
      en: "Recognized for reimagining human connection through hardware — proving that sometimes, antithesis to excessive digital communication.",
      ja: "「なにを、なぜ、いかにハックしたのか？」を問う次世代クリエイターのためのアワードにて、過剰なデジタルコミュニケーションに対するアンチテーゼとして人間の繋がりをハードウェアを通じて再定義（ハック）した点が高く評価されました。",
    },
    image: hackaward,
    page: {
      title: {
        en: "Award Ceremony Report",
        ja: "授賞式レポート",
      },
      url: "https://wired.jp/article/creative-hack-award-2025-final/",
    },
  },
  {
    title: {
      en: "TMU EntreBloom Business Idea Challenge 2025",
      ja: "TMU EntreBloom ビジネスアイデアチャレンジ 2025",
    },
    date: "2025-12",
    prize: {
      en: "Grand Prize",
      ja: "最優秀賞",
    },
    description: {
      en: "Won the right to participate in an overseas training program. Pitched to local professionals at Salesforce, Plug and Play, etc. in Silicon Valley, and received strong empathy for the approach to modern digital fatigue.",
      ja: "東京都立大学主催のコンテストにおいて、海外研修の参加権を獲得。シリコンバレーにてSalesforceやPlug and Playなど現地の著名な企業に向けてピッチを行い、機能を引き算したアナログな体験が言語や文化の壁を越えて強い共感と評価を獲得しました。",
    },
    image: sf,
    page: {
      title: {
        ja: "サンフランシスコ研修レポート",
        en: "San Francisco Training Report",
      },
      url: "https://research-miyacology.tmu.ac.jp/news/27493/",
    },
  },
];
