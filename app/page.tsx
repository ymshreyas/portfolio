import Image from "next/image";
import { Hero } from "./components/Hero";
import { FloatingNav } from "./components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";
import Grid from "./components/Grid";

export default function Home() {
  return (
    <div className="bg-black-100 container">
      <FloatingNav navItems={[{ name: "Home", link: "/", icon: <FaHome /> }]} />
      <Hero />
      <Grid />
    </div>
  );
}
