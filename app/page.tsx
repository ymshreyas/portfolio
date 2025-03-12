import Image from "next/image";
import { Hero } from "./components/Hero";
import { FloatingNav } from "./components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";
import Grid from "./components/Grid";
import RecentProjects from "./components/RecentProjects";
import { navItems } from "./data";

export default function Home() {
  return (
    <div className="bg-black-100 container">
      <FloatingNav navItems={navItems} />
      <Hero />
      <Grid />
      <RecentProjects/>
    </div>
  );
}
