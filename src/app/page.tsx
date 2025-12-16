import { Navbar, Footer } from "@/components/layout";
import {
  Hero,
  AboutPreview,
  TeamsPreview,
  CTASection,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutPreview />
        <TeamsPreview />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
