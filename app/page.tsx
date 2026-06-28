import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Welcome from "@/components/Welcome";
import Leadership from "@/components/Leadership";
import VisionMission from "@/components/VisionMission";
import ServiceTimes from "@/components/ServiceTimes";
import Ministries from "@/components/Ministries";
import Events from "@/components/Events";
//import Projects from "@/components/Projects";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-slate-50">
      <Navbar />
      <Hero />
      <Welcome />
      <Leadership />
      <VisionMission />
      <ServiceTimes />
      <Ministries />
      <Events />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}