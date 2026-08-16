import { site, whatsappLink } from "@/data/site";
import logo from "@/assets/blackout-logo.png.asset.json";


const links = [
  { label: "Home", href: "#home" },
  { label: "Games", href: "#games" },
  { label: "Pricing", href: "#pricing" },
  { label: "Offers", href: "#offers" },
  { label: "Booking", href: "#booking" },
  { label: "Location", href: "#location" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border pt-16 pb-28 sm:pb-16">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-3">
        <div>
          <img
            src={logo.url}
            alt="Blackout Gaming Cafe logo"
            width={96}
            height={96}
            loading="lazy"
            className="mb-4 h-16 w-16 object-contain"
          />
          <p className="font-display text-xl font-bold tracking-[0.28em] neon-text">
            {site.shortName}
          </p>
          <p className="mt-1 text-sm text-muted-foreground">Gaming Cafe · {site.city}</p>

          <p className="mt-4 text-xs font-semibold tracking-[0.28em] text-primary-glow uppercase">
            {site.tagline}
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="text-xs font-bold tracking-[0.25em] uppercase">Explore</h2>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-muted-foreground">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-primary-glow">
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-glow"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href={whatsappLink(`Hi ${site.name}!`)}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-glow"
              >
                WhatsApp
              </a>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className="text-xs font-bold tracking-[0.25em] uppercase">Visit</h2>
          <address className="mt-4 space-y-1.5 text-sm text-muted-foreground not-italic">
            <p>
              <a href={`tel:+91${site.phone}`} className="hover:text-primary-glow">
                {site.phone}
              </a>
            </p>
            <p>{site.shortAddress}</p>
            <p>11 AM — 2 AM, every day</p>
          </address>
        </div>
      </div>

      <p className="mx-auto mt-12 max-w-7xl px-4 text-xs text-muted-foreground/70 sm:px-6">
        © {new Date().getFullYear()} {site.name}
      </p>
    </footer>
  );
}
