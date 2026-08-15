import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Experience } from "@/components/sections/Experience";
import { Pricing } from "@/components/sections/Pricing";
import { PayAfter } from "@/components/sections/PayAfter";
import { Games } from "@/components/sections/Games";
import { StudentOffer } from "@/components/sections/StudentOffer";
import { Snacks } from "@/components/sections/Snacks";
import { Gallery } from "@/components/sections/Gallery";
import { Booking } from "@/components/sections/Booking";
import { LocationSection } from "@/components/sections/LocationSection";
import { InstagramSection } from "@/components/sections/InstagramSection";
import { GameNights } from "@/components/sections/GameNights";
import { Footer } from "@/components/sections/Footer";
import { FloatingActions } from "@/components/sections/FloatingActions";
import { site } from "@/data/site";

const title = "Blackout Gaming Cafe Kochi | PS5 Gaming & Multiplayer";
const description =
  "Blackout Gaming Cafe in Kochi — premium PS5 gaming, multiplayer sessions, student offers, snacks and late-night gaming. Book your gaming session today.";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "EntertainmentBusiness",
  name: site.name,
  description,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Lisie Hospital Road, near Kuluki Cafe",
    addressLocality: "Kochi",
    addressRegion: "Kerala",
    addressCountry: "IN",
  },
  telephone: `+91${site.phone}`,
  openingHours: "Mo-Su 11:00-02:00",
  sameAs: [site.instagramUrl],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(structuredData),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Pricing />
        <PayAfter />
        <Games />
        <StudentOffer />
        <Snacks />
        <Gallery />
        <Booking />
        <GameNights />
        <LocationSection />
        <InstagramSection />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
