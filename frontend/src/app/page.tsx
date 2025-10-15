// import SectionEvents
// import SectionAbout
// import SectionTips&Advice
// import SectionGallery
// import SectionSupportsUs
// import SectionContact

export default function HomePage() {
  return (
    <main>
      {/* Section Accueil */}
      <section id="home" className="min-h-screen flex flex-col items-center justify-center bg-blue-100">
        <h1 className="text-6xl font-bold mb-4">Bienvenue sur notre site</h1>
        <p className="text-gray-700 max-w-2xl text-center">
          Découvrez nos événements et nos projets solidaires.
        </p>
      </section>
    </main>
  );
}
