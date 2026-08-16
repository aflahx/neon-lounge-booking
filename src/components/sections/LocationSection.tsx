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
              <iframe
                title={`Satellite map showing ${site.name}`}
                src={site.mapEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full border-0"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 ring-1 ring-primary/25 ring-inset"
              />
              <div className="pointer-events-none absolute bottom-3 left-3 flex items-center gap-2 rounded-lg bg-background/80 px-3 py-2 backdrop-blur-md">
                <MapPin size={16} className="text-primary-glow" aria-hidden />
                <span className="font-display text-[0.65rem] font-bold tracking-[0.22em]">
                  SATELLITE VIEW · {site.shortAddress.toUpperCase()}
                </span>
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
