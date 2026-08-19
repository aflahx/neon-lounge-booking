import { useEffect, useRef, useState } from "react";
import controller from "@/assets/controller-3d.png";

/**
 * Pseudo-3D floating controller: CSS 3D transforms driven by pointer position
 * plus an idle float/rotate loop. No WebGL, so it runs everywhere.
 */
export function FloatingController({ className = "" }: { className?: string }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const frame = useRef<number | null>(null);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      if (frame.current !== null) return;
      frame.current = requestAnimationFrame(() => {
        frame.current = null;
        const nx = e.clientX / window.innerWidth - 0.5;
        const ny = e.clientY / window.innerHeight - 0.5;
        setTilt({ x: nx, y: ny });
      });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (frame.current !== null) cancelAnimationFrame(frame.current);
    };
  }, []);

  return (
    <div
      aria-hidden
      className={`pointer-events-none select-none ${className}`}
      style={{ perspective: "1100px" }}
    >
      <div className="controller-orbit">
        <div
          style={{
            height: "100%",
            width: "100%",
            transform: `rotateY(${tilt.x * 26}deg) rotateX(${-tilt.y * 20}deg)`,
            transformStyle: "preserve-3d",
            transition: "transform 400ms cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          <div
            aria-hidden
            className="glow-pulse absolute top-1/2 left-1/2 h-3/5 w-3/5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/30 blur-[90px]"
          />
          <img
            src={controller}
            alt=""
            width={1024}
            height={1024}
            loading="lazy"
            className="controller-bob relative h-full w-full object-contain drop-shadow-[0_40px_60px_oklch(0_0_0/0.7)]"
          />
        </div>
      </div>

    </div>
  );
}
