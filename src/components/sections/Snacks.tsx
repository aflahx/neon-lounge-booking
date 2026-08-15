import { Reveal } from "@/components/Reveal";
import snacksImage from "@/assets/snacks.jpg";

const items = ["Burgers", "Soft Drinks", "Coffee", "Snacks", "Chill Zone"];

export function Snacks() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border">
            <img
              src={snacksImage}
              alt="Burger, fries, iced coffee and soft drinks on a dark table lit with neon purple light"
              width={1536}
              height={864}
              loading="lazy"
              className="h-[26rem] w-full object-cover sm:h-[32rem]"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/20"
            />
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-lg px-6 sm:px-12">
                <p className="text-xs font-semibold tracking-[0.3em] text-primary-glow uppercase">
                  Snacks & Chill
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">
                  FUEL YOUR GAME.
                </h2>
                <p className="mt-4 text-sm text-foreground/80 sm:text-base">
                  Because good gaming sessions need good fuel.
                </p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-primary/35 bg-primary/10 px-3.5 py-1.5 text-[0.65rem] font-semibold tracking-[0.18em] text-primary-glow uppercase"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
