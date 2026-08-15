import { Gamepad2, GraduationCap } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { NeonLink } from "@/components/NeonButton";
import { site, whatsappLink } from "@/data/site";

export function StudentOffer() {
  return (
    <section id="offers" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="glass relative overflow-hidden rounded-3xl border-gold/25 px-6 py-12 sm:px-12 sm:py-16">
            <div
              aria-hidden
              className="ambient-drift absolute -top-24 -right-16 h-80 w-80 rounded-full bg-gold/20 blur-[120px]"
            />
            <div
              aria-hidden
              className="ambient-drift absolute -bottom-28 -left-20 h-80 w-80 rounded-full bg-primary/30 blur-[120px]"
            />

            <div className="relative grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
              <div>
                <p className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-[0.65rem] font-bold tracking-[0.22em] text-gold uppercase">
                  <GraduationCap size={14} aria-hidden /> Student Offer
                </p>
                <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
                  STUDENTS, THIS ONE'S FOR YOU.
                </h2>
                <p className="mt-4 font-display text-4xl leading-tight font-bold text-gold sm:text-6xl">
                  GAME MORE.
                  <br />
                  PAY LESS.
                </p>
                <p className="mt-5 max-w-md text-sm text-muted-foreground sm:text-base">
                  Bring your valid student ID and enjoy exclusive student rates.
                </p>
                <NeonLink
                  href={whatsappLink(
                    `Hi ${site.name}! I'm a student — can you tell me about the student rates?`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="gold"
                  className="mt-8"
                >
                  Show student ID
                </NeonLink>
              </div>

              <div className="relative hidden justify-center lg:flex">
                <div
                  aria-hidden
                  className="absolute inset-0 m-auto h-56 w-56 rounded-full bg-primary/35 blur-[90px]"
                />
                <Gamepad2
                  aria-hidden
                  size={220}
                  strokeWidth={0.8}
                  className="relative text-gold/80"
                  style={{ animation: "floatY 6s ease-in-out infinite" }}
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
