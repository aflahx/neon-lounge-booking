import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { NeonLink } from "@/components/NeonButton";
import { pricingFootnote, pricingPlans } from "@/data/site";

export function Pricing() {
  return (
    <section id="pricing" className="relative py-20 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/3 left-1/2 -z-10 h-96 w-[42rem] max-w-full -translate-x-1/2 rounded-full bg-primary/12 blur-[130px]"
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Gaming Rates"
          title="CHOOSE YOUR GAME TIME"
          subtitle="Simple pricing. More gaming."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {pricingPlans.map((plan, i) => (
            <Reveal key={plan.id} delay={i * 100}>
              <article
                className={`glass neon-hover relative flex h-full flex-col rounded-2xl p-7 ${
                  plan.featured ? "neon-ring border-primary/50" : ""
                }`}
              >
                <span
                  className={`inline-flex w-fit rounded-full px-3 py-1 text-[0.6rem] font-bold tracking-[0.2em] uppercase ${
                    plan.featured
                      ? "bg-primary text-primary-foreground"
                      : "bg-primary/12 text-primary-glow"
                  }`}
                >
                  {plan.label}
                </span>

                <h3 className="mt-5 text-lg font-bold tracking-[0.15em] uppercase">{plan.title}</h3>

                <div className="mt-4 flex flex-wrap items-baseline gap-3">
                  <span className="font-display text-5xl font-bold text-foreground neon-text">
                    ₹{plan.price}
                  </span>
                  <span className="text-sm text-muted-foreground">{plan.unit}</span>
                </div>

                {plan.originalPrice ? (
                  <p className="mt-1 text-sm text-muted-foreground">
                    <span className="line-through">₹{plan.originalPrice}</span>
                    <span className="ml-2 text-primary-glow">
                      Save ₹{plan.originalPrice - plan.price}
                    </span>
                  </p>
                ) : null}

                {plan.note ? (
                  <p className="mt-2 text-xs font-semibold tracking-widest text-gold uppercase">
                    {plan.note}
                  </p>
                ) : null}

                <NeonLink
                  href="#booking"
                  variant={plan.featured ? "primary" : "outline"}
                  className="mt-7 w-full"
                >
                  Book now
                </NeonLink>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-center text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
          {pricingFootnote}
        </p>
      </div>
    </section>
  );
}
