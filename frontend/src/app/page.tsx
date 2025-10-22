import NavBar from "@/Components/NavBar";
import SectionEvents from "@/Components/sections/Events";
import SectionAbout from "@/Components/sections/About";
// import SectionTips&Advices
import SectionGallery from "@/Components/sections/Gallery";
// import SectionSupportsUs
import SectionContact from "@/Components/sections/Contact"

export default function HomePage() {
  return (
    <main>
      {/* Section Accueil */}
      <NavBar />
      {/* Section Events */}
      <SectionEvents />
      {/* Section About */}
      <SectionAbout />
      {/* Section Gallery */}
      <SectionGallery />
      {/* Section Contact */}
      <SectionContact />
    </main>
  );
}
