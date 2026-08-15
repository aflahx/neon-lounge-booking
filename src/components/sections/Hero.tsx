import { Clock } from "lucide-react";
import heroImage from "@/assets/hero-lounge.jpg";
import { site } from "@/data/site";
import { NeonLink } from "@/components/NeonButton";

export function Hero() {
  return (
    <section id="home" className="relative isolate flex min-h-[100svh] items-center overflow-hidden">
      <img
        src={heroImage}
        alt="Dark gaming lounge with a PS5 console, controller and a large display lit by neon purple light"
        width={1920}
        height={1088}
        fetchPriority="high"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-right"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div
        aria-hidden
        className="ambient-drift absolute -top-40 -left-32 -z-10 h-[38rem] w-[38rem] rounded-full bg-primary/25 blur-[140px]"
      />

      <div className="mx-auto w-full max-w-7xl px-4 pt-28 pb-24 sm:px-6">
        <div className="max-w-2xl">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-[0.65rem] font-semibold tracking-[0.22em] text-primary-glow uppercase">
            <Clock size={13} aria-hidden /> {site.hoursShort}
          </p>

          <p className="font-display text-sm font-bold tracking-[0.55em] text-primary-glow">
            BLACKOUT
          </p>

          <h1 className="mt-3 font-display text-[2.75rem] leading-[0.95] font-bold tracking-tight sm:text-6xl lg:text-7xl">
            PLAY.
            <br />
            FOCUS.
            <br />
            <span className="neon-text text-primary-glow">DOMINATE.</span>
          </h1>

          <p className="mt-6 max-w-md text-base text-foreground/80 sm:text-lg">
            Premium console gaming in the heart of Kochi.
          </p>
          <p className="mt-2 text-xs font-semibold tracking-[0.22em] text-muted-foreground uppercase">
            PS5 • Multiplayer • Great Games • Great Vibes
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <NeonLink href="#booking">Book your slot</NeonLink>
            <NeonLink href="#games" variant="outline">
              Explore games
            </NeonLink>
          </div>
        </div>
      </div>

      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent"
      />
    </section>
  );
}
