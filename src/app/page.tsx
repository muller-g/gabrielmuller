import "./index.css";
import HomeSection from "@/_sections/home";
import AboutSection from "@/_sections/about";
import ServicesSection from "@/_sections/services";
import PortfolioSection from "@/_sections/portfolio";
import ResumeSection from "@/_sections/resume";
import SocialSection from "@/_sections/social";
import ContactSection from "@/_sections/contact";

export default function Home() {
  return (
    <main className="home-content">
        <HomeSection />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
        <ResumeSection />
        <SocialSection />
        <ContactSection />
    </main>
  );
}
