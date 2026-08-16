import { Clock, MapPin, Navigation, Phone } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { NeonLink } from "@/components/NeonButton";
import { site } from "@/data/site";

export function LocationSection() {
  return (
    <section id="location" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Location"
          title="FIND THE BLACKOUT"
          subtitle="Right on Lisie Hospital Road — easy to reach from anywhere in Kochi."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <Reveal>
            <div className="glass relative h-72 overflow-hidden rounded-2xl sm:h-full sm:min-h-80">
              <div
                aria-hidden
                className="absolute inset-0 opacity-60"
                style={{
                  backgroundImage:
                    "linear-gradient(oklch(0.82 0.16 86 / 0.18) 1px, transparent 1px), linear-gradient(90deg, oklch(0.82 0.16 86 / 0.18) 1px, transparent 1px)",
                  backgroundSize: "48px 48px",
                }}
              />
              <div
                aria-hidden
                className="absolute top-1/2 left-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/30 blur-[70px]"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                <MapPin
                  size={44}
                  className="mx-auto text-primary-glow"
                  aria-hidden
                  style={{ animation: "floatY 4s ease-in-out infinite" }}
                />
                <p className="mt-3 font-display text-sm font-bold tracking-[0.25em] neon-text">
                  BLACKOUT
                </p>
                <p className="mt-1 text-xs text-muted-foreground">{site.shortAddress}</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="glass flex h-full flex-col justify-center gap-6 rounded-2xl p-7 sm:p-9">
              <div className="flex gap-4">
                <MapPin size={20} className="mt-1 shrink-0 text-primary-glow" aria-hidden />
                <div className="min-w-0">
                  <h3 className="text-sm font-bold tracking-[0.2em] uppercase">Address</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{site.address}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock size={20} className="mt-1 shrink-0 text-primary-glow" aria-hidden />
                <div className="min-w-0">
                  <h3 className="text-sm font-bold tracking-[0.2em] uppercase">Opening hours</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{site.hours}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone size={20} className="mt-1 shrink-0 text-primary-glow" aria-hidden />
                <div className="min-w-0">
                  <h3 className="text-sm font-bold tracking-[0.2em] uppercase">Contact</h3>
                  <a
                    href={`tel:+91${site.phone}`}
                    className="mt-1 block text-sm text-muted-foreground hover:text-primary-glow"
                  >
                    {site.phone}
                  </a>
                </div>
              </div>

              <NeonLink
                href={site.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 w-full sm:w-fit"
              >
                <Navigation size={14} aria-hidden /> Get directions
              </NeonLink>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
