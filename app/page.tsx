import Navbar from "./components/navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import TechGrid from "./components/TechGrid";
import ExperienceTimeline from "./components/ExperienceTimeline";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <TechGrid />
        <ExperienceTimeline />
        <ContactSection />
      </main>
      <footer className="footer">
        <p>
          Built with{" "}
          <a
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Next.js
          </a>{" "}
          &mdash; Designed & developed by Avinash Jha
        </p>
      </footer>
    </>
  );
}
