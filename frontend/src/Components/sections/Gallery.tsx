import ImagesGallery from "@/Components/assets/ImagesGallery/ImagesGallery";
import "./Section.scss";

export default function SectionGallery() {
  return (
    <section id="Gallery" className="section section--light">
      <div className="section__header">
        <h2 className="section__title">Notre Galerie</h2>
        <p className="section__description">
          Découvrez en images les moments forts de notre association. Cette
          galerie met en lumière nos événements passés, nos rencontres et les
          visages qui font vivre nos projets. Faites défiler pour revivre les
          instants marquants et plonger au cœur de notre aventure collective.
        </p>
      </div>
      <div className="section__content">
        <ImagesGallery />
      </div>
    </section>
  );
}
