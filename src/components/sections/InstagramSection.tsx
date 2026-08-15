import { Instagram } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { NeonLink } from "@/components/NeonButton";
import { site } from "@/data/site";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import gameFc from "@/assets/game-fc.jpg";
import snacks from "@/assets/snacks.jpg";

/** Placeholder feed tiles — swap for real Instagram posts or an embed later. */
const posts = [
  { src: g1, caption: "Gaming setups" },
  { src: g2, caption: "PS5" },
  { src: snacks, caption: "Offers" },
  { src: g3, caption: "Gaming nights" },
  { src: g4, caption: "Atmosphere" },
  { src: gameFc, caption: "Events" },
];

export function InstagramSection() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Social"
          title="FOLLOW THE BLACKOUT"
          subtitle={`Offers, game nights and behind-the-scenes on ${site.instagramHandle}.`}
        />

        <ul className="mt-12 grid grid-cols-3 gap-2 sm:gap-3 lg:grid-cols-6">
          {posts.map((post, i) => (
            <Reveal as="li" key={post.caption + i} delay={(i % 6) * 60}>
              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-square overflow-hidden rounded-lg border border-border"
              >
                <img
                  src={post.src}
                  alt={`${post.caption} at ${site.name}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <span className="absolute inset-0 grid place-items-center bg-background/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <Instagram size={20} className="text-primary-glow" aria-hidden />
                </span>
              </a>
            </Reveal>
          ))}
        </ul>

        <div className="mt-10 text-center">
          <NeonLink href={site.instagramUrl} target="_blank" rel="noopener noreferrer">
            <Instagram size={14} aria-hidden /> Follow on Instagram
          </NeonLink>
        </div>
      </div>
    </section>
  );
}
