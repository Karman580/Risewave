import dynamic from "next/dynamic";
import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import { Footer } from "@/components/layout/footer";

// Dynamic imports for below-fold sections (performance optimization)
const Services = dynamic(
  () => import("@/components/sections/services").then((mod) => ({ default: mod.Services })),
  { ssr: true }
);

const About = dynamic(
  () => import("@/components/sections/about").then((mod) => ({ default: mod.About })),
  { ssr: true }
);

const Contact = dynamic(
  () => import("@/components/sections/contact").then((mod) => ({ default: mod.Contact })),
  { ssr: true }
);

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="max-w-[1280px] mx-auto">
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
