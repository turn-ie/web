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
      en: "A charm-sized device that exchanges 8×8 pixel messages \"tune\" with strangers you pass by.\n No chat.\n No follow.\n No pressure — just the quiet thrill of knowing someone was there.",
      ja: "すれ違った誰かと、8×8ピクセルのメッセージ「tune」を交換するチャーム型デバイス。\nチャットも、フォローも、面倒なやり取りもいりません。\nあるのはただ、誰かとすれ違ったという静かなワクワク感だけ。",
    },
    video: pick,
    image: hand,
    reverse: false,
  },
  {
    title: "What is turnie?",
    description: {
      en: "In a world optimized by algorithms, every encounter is curated — and the joy of true coincidence has quietly disappeared. \nturnie brings back the magic of passing someone by:\n the same time,\n the same place,\n a fleeting connection that needs nothing more than that.",
      ja: "アルゴリズムに最適化された今の世界では、偶然の出会いすらもどこか計画的。\nそんな中で失われつつある「本当の偶然」を、turnieは取り戻します。\n同じ時間、同じ場所に。ただ居合わせただけで生まれる、ほんの一瞬の出会い。",
    },
    image: three,
    reverse: true,
  },
  {
    title: "\"tune\" Exchange",
    description: {
      en: "Set your tune — a tiny 8×8 pixel canvas that's entirely yours. Pass someone carrying turnie, and your tunes swap automatically. No tapping, no requesting, no replying. Just a small piece of you, quietly landing in a stranger's pocket.",
      ja: "8×8ピクセルの小さなキャンバスに、あなただけの「tune」を描こう。\nあとはturnieを持って歩くだけ。誰かとすれ違えば、自動でメッセージが入れ替わります。\nフォローも、リクエストも、返信も不要。あなたのカケラが、誰かのポケットへそっと届きます。",
    },
    image: grass,
    video: exchange,
    reverse: false,
  },
  {
    title: "Wear it",
    description: {
      en: "Wearing turnie is a statement. It says: I'm open to the unexpected, but I'm not looking to be followed. Attach it to your bag, wear it your way, and let your 8×8 pixel picture speak for itself.",
      ja: "turnieを身につけるのは、「偶然は好きだけど、繋がれすぎたくない」というちょっとした意思表示。\nバッグにつけて、自分らしく。小さな8×8の世界に、今のあなたを語らせよう",
    },
    image: fashion,
    reverse: true,
  },
  {
    title: "Make it yours",
    description: {
      en: "Swap the body, change the strap, make it yours. \nturnie is designed to be as individual as the person carrying it — because the outside matters just as much as what's inside.",
      ja: "ボディを着せ替えたり、お気に入りのストラップをつけたり。\n持ち主の個性を映し出すために、turnieはカスタマイズしやすく作られています。\n中身のピクセルと同じくらい、見た目のワクワクも大切にしたいから。",
    },
    image: parts,
    reverse: true,
  },
  {
    title: "The App",
    description: {
      en: "Set your tune from text, a photo, or a hand-drawn pixel design. That's all the app does. Everything else happens in the real world — no feed, no notifications, no screen time required.",
      ja: "文字や写真、手描きのイラストからtuneを作る。アプリの役割はそれだけです。\nあとの主役は、すべて現実の世界。通知も、タイムラインも、画面を見続ける時間も必要ありません。",
    },
    video: app,
    image: parts,
    reverse: false,
  },
  {
    title: "Awards",
    description: {
      en: "Recognized at TMU Business Idea Contest and WIRED Creative Hack Award for reimagining human connection through hardware — proving that sometimes, less really is more.",
      ja: "TMUビジネスアイデアコンテストやWIRED Creative Hack Awardで高く評価されました。\n「つながり」をハードウェアで再定義したこのプロジェクトは、引き算をすることで生まれる豊かさを形にしています。",
    },
    image: hackaward,
    reverse: false,
  },
];

