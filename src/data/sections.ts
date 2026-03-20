import fashion from "/images/fashion.jpg"
import hackaward from "/images/hackaward.jpg"
import hand from "/images/hand.jpg"
import parts from "/images/parts.jpg"
import three from "/images/three.jpg"
import pick from "/images/turnie.mp4"
import app from "/images/app.mp4"
import exchange from "/images/exchange.mp4"
import grass from "/images/grass.jpg"

export const sections = [
  {
    title: "turnie, StreetPass Device",
    description: {
      en: "A charm-sized device that exchanges pixel messages \"tune\" with strangers you pass by.\n No chat.\n No follow.\n No pressure — just the quiet thrill of knowing someone was there.",
      ja: "すれ違った見知らぬ人と、ピクセルメッセージ「tune」を交換するチャーム型デバイス。\nチャットも、\nフォローも、\nプレッシャーも一切なし。\nただ、誰かがそこにいたという、静かな高揚感だけがある。",
    },
    video: pick,
    image: hand,
    reverse: false,
  },
  {
    title: "What is turnie?",
    description: {
      en: "In a world optimized by algorithms, every encounter is curated — and the joy of true coincidence has quietly disappeared. \nturnie brings back the magic of passing someone by:\n the same time,\n the same place,\n a fleeting connection that needs nothing more than that.",
      ja: "アルゴリズムが最適化した世界では、出会いはすべて設計されている。\n本当の偶然が持つ喜びは、静かに失われてしまった。\nturnieは、\n同じ時間・同じ場所にいたというだけで生まれる、一期一会の魔法を取り戻す。",
    },
    image: three,
    reverse: true,
  },
  {
    title: "\"tune\" Exchange",
    description: {
      en: "Set your tune — a tiny 8×8 pixel canvas that's entirely yours. Pass someone carrying turnie, and your tunes swap automatically. No tapping, no requesting, no replying. Just a small piece of you, quietly landing in a stranger's pocket.",
      ja: "tuneを設定しよう。8×8ピクセルの小さなキャンバスは、あなただけのもの。\n turnieを持つ誰かとすれ違えば、tuneは自動的に交換される。\nタップも、リクエストも、返信も必要ない。あなたの小さな欠片が、静かに見知らぬ誰かのもとへ届く。",
    },
    image: grass,
    video: exchange,
    reverse: false,
  },
  {
    title: "Wear it",
    description: {
      en: "Wearing turnie is a statement. It says: I'm open to the unexpected, but I'm not looking to be followed. Attach it to your bag, wear it your way, and let your 8×8 pixel picture speak for itself.",
      ja: "turnieを身につけることは、ひとつの意思表示。偶然は歓迎するけど、つながりは求めていない。バッグにつけて、自分らしく。8×8ピクセルの小さな画面が、あなたを語る。",
    },
    image: fashion,
    reverse: true,
  },
  {
    title: "Make it yours",
    description: {
      en: "Swap the body, change the strap, make it yours. \nturnie is designed to be as individual as the person carrying it — because the outside matters just as much as what's inside.",
      ja: "ボディを替えて、ストラップを替えて、自分だけの一台に。turnieは持ち主と同じくらい個性的であるべきだと考えている。\n外側のデザインも、中身と同じくらい大切だから。",
    },
    image: parts,
    reverse: true,
  },
  {
    title: "The App",
    description: {
      en: "Set your tune from text, a photo, or a hand-drawn pixel design. That's all the app does. Everything else happens in the real world — no feed, no notifications, no screen time required.",
      ja: "テキスト、写真、手描きのピクセルアート——アプリでできるのは、tuneの設定だけ。あとはすべて、現実の世界で起きる。フィードも、通知も、画面を見続ける必要もない。",
    },
    video: app,
    image: parts,
    reverse: false,
  },
  {
    title: "Awards",
    description: {
      en: "Recognized at TMU Business Idea Contest and WIRED Creative Hack Award for reimagining human connection through hardware — proving that sometimes, less really is more.",
      ja: "TMUビジネスアイデアコンテストおよびWIRED Creative Hack Awardにて受賞。\nハードウェアで人とのつながりを再定義したこのプロジェクトは、「削ぎ落とすことこそが豊かさだ」を体現している。",
    },
    image: hackaward,
    reverse: false,
  },
];

