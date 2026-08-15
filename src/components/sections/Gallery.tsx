import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";

/** Placeholder atmosphere shots — replace with real Blackout photos. */
const shots = [
  { src: g1, alt: "Gaming stations with glowing screens under neon purple strip lighting", span: "sm:col-span-2 sm:row-span-2" },
  { src: g2, alt: "Close-up of a controller held in hands in a dark neon-lit room", span: "" },
  { src: g3, alt: "Friends watching a big screen during a multiplayer session", span: "" },
  { src: g4, alt: "Chill zone with couches and neon purple wall lighting", span: "sm:col-span-2" },
];

export function Gallery() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Atmosphere"
          title="STEP INTO THE BLACKOUT"
          subtitle="Dark room. Neon lights. Controllers, screens and your squad."
        />

        <div className="mt-12 grid auto-rows-[11rem] grid-cols-2 gap-3 sm:auto-rows-[13rem] sm:grid-cols-4">
          {shots.map((shot, i) => (
            <Reveal
              key={shot.alt}
              delay={i * 90}
              className={`group relative overflow-hidden rounded-xl border border-border ${shot.span}`}
            >
              <img
                src={shot.src}
                alt={shot.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-primary/0 transition-colors duration-500 group-hover:bg-primary/15"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
