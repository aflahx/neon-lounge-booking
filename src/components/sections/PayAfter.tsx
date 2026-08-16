import { DoorOpen, Gamepad2, Receipt, ChevronDown } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const steps = [
  { no: "01", label: "WALK IN", icon: DoorOpen },
  { no: "02", label: "GRAB A CONTROLLER", icon: Gamepad2 },
  { no: "03", label: "SETTLE AT THE COUNTER", icon: Receipt },
];

export function PayAfter() {
  return (
    <section className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Payment"
          title="NOTHING UPFRONT"
          subtitle="Walk in, play as long as you want, and pay at the counter on your way out."
        />


        <div className="mt-12 flex flex-col items-stretch gap-3 md:flex-row md:items-center md:justify-center">
          {steps.map((step, i) => (
            <Reveal key={step.no} delay={i * 120} className="flex flex-col items-center md:flex-row">
              <div className="glass neon-hover flex w-full items-center gap-4 rounded-xl px-6 py-5 md:w-52 md:flex-col md:text-center">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-primary/15 text-primary-glow">
                  <step.icon size={20} aria-hidden />
                </span>
                <div className="min-w-0">
                  <p className="font-display text-xs tracking-[0.3em] text-muted-foreground">
                    {step.no}
                  </p>
                  <p className="font-display text-lg font-bold tracking-[0.15em]">{step.label}</p>
                </div>
              </div>
              {i < steps.length - 1 ? (
                <ChevronDown
                  aria-hidden
                  size={20}
                  className="my-2 text-primary/60 md:mx-3 md:my-0 md:-rotate-90"
                />
              ) : null}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
