import HeroSection from "../components/HeroSection";
import NavBar from "../components/NavBar";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import EmailSection from "../components/EmailSection";
import Waves from "../components/Waves";
import Experience from "../components/Experience";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#121212]">
      <NavBar />
      <div class="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Waves />
    </main>
  );
}
