import { Gamepad2, Users, Moon, Coffee } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const features = [
  {
    icon: Gamepad2,
    title: "PS5 Gaming",
    text: "High-quality console gaming experience.",
  },
  {
    icon: Users,
    title: "Multiplayer",
    text: "Bring your friends and compete together.",
  },
  {
    icon: Moon,
    title: "Late Night Gaming",
    text: "Open every day from 11 AM to 2 AM.",
  },
  {
    icon: Coffee,
    title: "Gaming + Chill",
    text: "Snacks, drinks, coffee and a relaxed gaming atmosphere.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="The Experience"
          title="MORE THAN JUST GAMING."
          subtitle="Bring your squad. Pick your game. Take over the screen."
        />

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 90}>
              <article className="glass neon-hover h-full rounded-xl p-6">
                <span className="mb-5 grid h-11 w-11 place-items-center rounded-lg bg-primary/15 text-primary-glow">
                  <feature.icon size={20} aria-hidden />
                </span>
                <h3 className="text-lg font-bold tracking-wide uppercase">{feature.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{feature.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
