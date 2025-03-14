import { Hero } from "./components/Hero";
import { FloatingNav } from "./components/ui/FloatingNav";
import Grid from "./components/Grid";
import RecentProjects from "./components/RecentProjects";
import { navItems } from "./data";
import { InfiniteMovingCardsDemo } from "./components/Approach";
import Footer from "./components/Footer";
import { TimelineDemo } from "./components/TimelineDemo";

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
      <TimelineDemo />
      <InfiniteMovingCardsDemo />
      <Footer />
    </div>
  );
}
