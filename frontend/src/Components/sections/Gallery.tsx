import ImagesGallery from "@/Components/assets/ImagesGallery/ImagesGallery";

import "./Gallery.scss";

export default function SectionEvents() {
  return (
    <section id="Gallery" className="section-gallery">
      <div className="section-gallery__header">
        <h2 className="section-gallery__title">Notre Gallerie</h2>
        <p className="section-gallery__description">
          Découvrez en images les moments forts de notre association. Cette
          galerie met en lumière nos événements passés, nos rencontres et les
          visages qui font vivre nos projets. Faites défiler pour revivre les
          instants marquants et plonger au cœur de notre aventure collective.
        </p>
      </div>
      <ImagesGallery />
    </section>
  );
}
