import { Sparkles } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import gameFc from "@/assets/game-fc.jpg";
import gameCity from "@/assets/game-city.jpg";
import gameWest from "@/assets/game-west.jpg";
import gameSamurai from "@/assets/game-samurai.jpg";
import gameShooter from "@/assets/game-shooter.jpg";
import gameWrestling from "@/assets/game-wrestling.jpg";

/** Illustrative artwork only — swap in licensed key art when available. */
const games = [
  { title: "EA Sports FC 26", image: gameFc },
  { title: "Grand Theft Auto V", image: gameCity },
  { title: "Red Dead Redemption", image: gameWest },
  { title: "Ghost of Tsushima", image: gameSamurai },
  { title: "Call of Duty: Modern Warfare", image: gameShooter },
  { title: "WWE 2K26", image: gameWrestling },
];

export function Games() {
  return (
    <section id="games" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Game Library"
          title="WHAT ARE YOU PLAYING?"
          subtitle="Pick your game. Grab your squad. Let the battle begin."
        />

        <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {games.map((game, i) => (
            <Reveal as="li" key={game.title} delay={(i % 4) * 80}>
              <article className="group neon-hover relative h-full overflow-hidden rounded-xl border border-border">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={game.image}
                    alt={`${game.title} themed artwork`}
                    width={768}
                    height={1024}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"
                />
                <h3 className="absolute inset-x-0 bottom-0 p-4 text-sm font-bold tracking-wide uppercase sm:text-base">
                  {game.title}
                </h3>
              </article>
            </Reveal>
          ))}

          <Reveal as="li" delay={320}>
            <article className="glass neon-hover flex h-full min-h-40 flex-col items-center justify-center gap-3 rounded-xl border-primary/40 p-6 text-center">
              <Sparkles className="glow-pulse rounded-full p-2 text-primary-glow" size={40} />
              <h3 className="font-display text-lg font-bold tracking-[0.25em] neon-text">
                AND MORE...
              </h3>
              <p className="text-xs text-muted-foreground">Ask at the counter for the full list.</p>
            </article>
          </Reveal>
        </ul>
      </div>
    </section>
  );
}
