
import Hero from "@/components/Hero";
import AboutUs from "@/components/Aboutus";
import VisionMission from "@/components/VisionMission";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import ContactUs from "@/components/ContactUs";

export default function Home() {
  return (
    <>

      <main className="min-h-screen">
        <Hero />
        <AboutUs />
        <VisionMission />
        <Services />
        <WhyChooseUs />
        <ContactUs />
      </main>
    </>
  );
}
