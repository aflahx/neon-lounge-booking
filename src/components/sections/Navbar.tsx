import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/data/site";

const links = [
  { label: "Home", href: "#home" },
  { label: "Experience", href: "#experience" },
  { label: "Games", href: "#games" },
  { label: "Pricing", href: "#pricing" },
  { label: "Offers", href: "#offers" },
  { label: "Location", href: "#location" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6"
      >
        <a href="#home" className="flex items-center gap-2.5">
          <img
            src={logo.url}
            alt="Blackout Gaming Cafe logo"
            width={40}
            height={40}
            className="h-9 w-9 object-contain"
          />
          <span className="font-display text-lg font-bold tracking-[0.3em] text-foreground neon-text">
            {site.shortName}
          </span>
        </a>


        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-xs font-semibold tracking-[0.15em] text-muted-foreground uppercase transition-colors hover:text-primary-glow"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#booking"
            className="hidden rounded-md bg-primary px-5 py-2.5 text-[0.65rem] font-bold tracking-[0.18em] text-primary-foreground uppercase transition-colors hover:bg-primary-glow sm:inline-flex"
          >
            Book your slot
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-border text-foreground lg:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-border bg-background/95 backdrop-blur-xl lg:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col px-4 py-2 sm:px-6">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border/50 py-3.5 text-sm font-semibold tracking-[0.15em] uppercase transition-colors hover:text-primary-glow"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="py-4">
              <a
                href="#booking"
                onClick={() => setOpen(false)}
                className="block rounded-md bg-primary px-5 py-3 text-center text-xs font-bold tracking-[0.18em] text-primary-foreground uppercase"
              >
                Book your slot
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
