import { MessageCircle } from "lucide-react";
import { site, whatsappLink } from "@/data/site";

export function FloatingActions() {
  const href = whatsappLink(`Hi ${site.name}! I'd like to know about gaming slots.`);

  return (
    <>
      {/* Desktop floating WhatsApp button */}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="glow-pulse fixed right-5 bottom-5 z-40 hidden items-center gap-2 rounded-full bg-[oklch(0.72_0.17_150)] px-5 py-3.5 text-xs font-bold tracking-[0.15em] text-background uppercase transition-transform duration-300 hover:-translate-y-0.5 sm:inline-flex"
      >
        <MessageCircle size={16} aria-hidden /> Chat on WhatsApp
      </a>

      {/* Mobile sticky bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/90 px-3 py-3 backdrop-blur-xl sm:hidden">
        <div className="grid grid-cols-2 gap-2">
          <a
            href="#booking"
            className="rounded-lg bg-primary px-4 py-3 text-center text-xs font-bold tracking-[0.15em] text-primary-foreground uppercase"
          >
            Book slot
          </a>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-lg bg-[oklch(0.72_0.17_150)] px-4 py-3 text-xs font-bold tracking-[0.15em] text-background uppercase"
          >
            <MessageCircle size={15} aria-hidden /> WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}
