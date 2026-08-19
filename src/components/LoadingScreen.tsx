import { useEffect, useState } from "react";
import gamer from "@/assets/loader-gamer.png";

const tips = [
  "\u201cGG\u201d means good game \u2014 say it, always.",
  "Squad of four? The rate drops per head.",
  "Play first. Settle at the counter after.",
  "Controllers charged. Screens calibrated.",
];

const DURATION = 2400;

export function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [tip] = useState(() => tips[Math.floor(Math.random() * tips.length)]);
  const [done, setDone] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const start = performance.now();
    let raf = requestAnimationFrame(function step(now) {
      const p = Math.min(1, (now - start) / DURATION);
      setProgress(p);
      if (p < 1) raf = requestAnimationFrame(step);
      else setDone(true);
      return undefined;
    });
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    if (!done) return;
    const t = setTimeout(() => setHidden(true), 700);
    return () => clearTimeout(t);
  }, [done]);

  useEffect(() => {
    document.body.style.overflow = hidden ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [hidden]);

  if (hidden) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading Blackout Gaming Cafe"
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background px-6 transition-opacity duration-700"
      style={{ opacity: done ? 0 : 1 }}
    >
      <div
        aria-hidden
        className="ambient-drift absolute top-1/4 left-1/2 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-primary/25 blur-[130px]"
      />

      <img
        src={gamer}
        alt=""
        width={1024}
        height={1024}
        className="controller-bob relative w-52 max-w-[55vw] object-contain sm:w-64"
      />

      <p className="relative mt-6 font-display text-sm font-bold tracking-[0.45em] text-primary-glow uppercase">
        Loading
        <span className="loading-dots" />
      </p>

      <div className="relative mt-4 h-1.5 w-56 overflow-hidden rounded-full bg-muted sm:w-72">
        <div
          className="h-full rounded-full transition-[width] duration-100 ease-linear"
          style={{ width: `${progress * 100}%`, background: "var(--gradient-neon)" }}
        />
      </div>

      <p className="relative mt-5 max-w-xs text-center text-xs text-muted-foreground italic">
        {tip}
      </p>
    </div>
  );
}
