import { useEffect, useRef } from "react";
import p5 from "p5";

const PALETTE = [
  "#FF6B6B", // coral red
  "#FFD93D", // warm yellow
  "#FF922B", // orange
];

const TILE_SIZE = 12;

export default function P5Background() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const sketch = (p: p5) => {
      let cols: number;
      let rows: number;

      const initTiles = () => {
        cols = Math.ceil(p.width / TILE_SIZE) + 1;
        rows = Math.ceil(p.height / TILE_SIZE) + 1;
      };

      p.setup = () => {
        const canvas = p.createCanvas(p.windowWidth, p.windowHeight);
        canvas.style("display", "block");
        p.colorMode(p.RGB, 255);
        p.noStroke()
        p.frameRate(1)
        initTiles();
      };

      p.draw = () => {
        p.clear();
        for (let ci = 0; ci < cols; ci++) {
          for (let ri = 0; ri < rows; ri++) {
            if (p.random() < 0.997) {
              p.fill(255, 0);
            } else {
              p.fill(p.random(PALETTE));
            }

            p.rect(
              ci * TILE_SIZE,
              ri * TILE_SIZE,
              TILE_SIZE - 1,
              TILE_SIZE - 1
            );
          }
        }
      };

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
        initTiles();
      };
    };

    const p5Instance = new p5(sketch, containerRef.current);
    return () => p5Instance.remove();
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 10,
        pointerEvents: "none",
      }}
    />
  );
}
