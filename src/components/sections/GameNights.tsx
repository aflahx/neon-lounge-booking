import { CalendarDays } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { events, site } from "@/data/site";

export function GameNights() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow="Events" title="GAME NIGHTS" subtitle="Compete. Connect. Repeat." />

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {events.map((event, i) => (
            <Reveal key={event.title} delay={i * 90}>
              <article className="glass neon-hover h-full rounded-xl p-6">
                <span className="mb-4 grid h-10 w-10 place-items-center rounded-lg bg-primary/15 text-primary-glow">
                  <CalendarDays size={18} aria-hidden />
                </span>
                <h3 className="text-base font-bold tracking-wide uppercase">{event.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{event.description}</p>
                <p className="mt-4 text-[0.65rem] font-semibold tracking-[0.2em] text-muted-foreground/70 uppercase">
                  Schedule to be announced
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Event dates are announced on{" "}
          <a
            href={site.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-glow underline-offset-4 hover:underline"
          >
            {site.instagramHandle}
          </a>
          .
        </p>
      </div>
    </section>
  );
}
