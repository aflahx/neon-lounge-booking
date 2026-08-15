import { useMemo, useState } from "react";
import { CheckCircle2, Info } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { NeonLink } from "@/components/NeonButton";
import { pricingPlans, site, whatsappLink } from "@/data/site";

const times = [
  "11:00 AM",
  "12:00 PM",
  "01:00 PM",
  "03:00 PM",
  "05:00 PM",
  "07:00 PM",
  "09:00 PM",
  "11:00 PM",
  "12:30 AM",
];

const todayISO = () => new Date().toISOString().slice(0, 10);

export function Booking() {
  const fallbackPlan = pricingPlans[0]!;
  const [players, setPlayers] = useState<number>(fallbackPlan.players);
  const [date, setDate] = useState<string>(todayISO());
  const [time, setTime] = useState<string>("");

  const plan = useMemo(
    () => pricingPlans.find((p) => p.players === players) ?? fallbackPlan,
    [players, fallbackPlan],
  );

  const ready = Boolean(date && time);

  const message = `Hi ${site.name}! I'd like to request a gaming session.
Players: ${players}
Date: ${date}
Time: ${time}
Rate: ₹${plan.price} ${plan.unit}
(Sent from the website — please confirm availability.)`;

  const fieldLabel =
    "text-[0.65rem] font-bold tracking-[0.22em] uppercase text-primary-glow mb-3 block";

  return (
    <section id="booking" className="relative py-20 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/4 -z-10 mx-auto h-80 w-[40rem] max-w-full rounded-full bg-primary/15 blur-[130px]"
      />
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Booking"
          title="READY TO PLAY?"
          subtitle="Pick your setup and send the request over WhatsApp — we confirm your slot personally."
        />

        <Reveal className="mt-12">
          <div className="glass rounded-2xl p-6 sm:p-9">
            <div className="mb-8">
              <span className={fieldLabel}>Step 1 — How many players?</span>
              <div className="grid grid-cols-3 gap-3">
                {pricingPlans.map((option) => (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => setPlayers(option.players)}
                    aria-pressed={players === option.players}
                    className={`rounded-xl border px-3 py-4 text-center transition-all duration-300 ${
                      players === option.players
                        ? "neon-ring border-primary bg-primary/15"
                        : "border-border bg-white/5 hover:border-primary/50"
                    }`}
                  >
                    <span className="block font-display text-xl font-bold">{option.players}</span>
                    <span className="block text-[0.65rem] tracking-[0.15em] text-muted-foreground uppercase">
                      {option.players === 1 ? "Player" : "Players"}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-8 grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="booking-date" className={fieldLabel}>
                  Step 2 — Choose your date
                </label>
                <input
                  id="booking-date"
                  type="date"
                  value={date}
                  min={todayISO()}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full rounded-lg border border-border bg-background/60 px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="booking-time" className={fieldLabel}>
                  Step 3 — Choose your time
                </label>
                <select
                  id="booking-time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full rounded-lg border border-border bg-background/60 px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none"
                >
                  <option value="">Select a start time</option>
                  {times.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="rounded-xl border border-primary/30 bg-primary/8 p-5">
              <p className={fieldLabel}>Step 4 — Confirm your session</p>
              <ul className="space-y-1.5 text-sm text-foreground/85">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-primary-glow" aria-hidden />
                  {players} {players === 1 ? "player" : "players"} · {plan.title.toLowerCase()}
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-primary-glow" aria-hidden />
                  {date || "Date not selected"} · {time || "Time not selected"}
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-primary-glow" aria-hidden />₹
                  {plan.price} {plan.unit} · minimum 1 hour · pay after you play
                </li>
              </ul>

              <NeonLink
                href={ready ? whatsappLink(message) : undefined}
                target="_blank"
                rel="noopener noreferrer"
                variant="whatsapp"
                aria-disabled={!ready}
                className={`mt-6 w-full ${ready ? "" : "pointer-events-none opacity-50"}`}
              >
                Book via WhatsApp
              </NeonLink>

              <p className="mt-4 flex items-start gap-2 text-xs text-muted-foreground">
                <Info size={14} className="mt-0.5 shrink-0" aria-hidden />
                This sends a request message — your slot is only confirmed once the team replies on
                WhatsApp.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
