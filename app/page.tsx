import { Hero } from "./components/Hero";
import { FloatingNav } from "./components/ui/FloatingNav";
import Grid from "./components/Grid";
import RecentProjects from "./components/RecentProjects";
import { navItems } from "./data";
import { Skills } from "./components/Skills";
import Footer from "./components/Footer";
import { Experience } from "./components/Experience";

export const metadata = {
  title: "My Portfolio Website",
};

export default function Home() {
  return (
    <div className="container">
      <FloatingNav navItems={navItems} />
      <Hero />
      <Grid />
      <RecentProjects />
      <Experience />
      <Skills />
      <Footer />
    </div>
  );
}
