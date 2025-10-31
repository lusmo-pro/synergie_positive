import TeamGallery from "@/Components/assets/TeamGallery/TeamGallery";
import "./Section.scss";

export default function SectionAbout() {
  return (
    <section id="About" className="section section--light">
      <div className="section__header">
        <h2 className="section__title">Nous Découvrir</h2>
        <p className="section__description">
          Plongez au cœur de notre univers et découvrez ce qui nous anime au
          quotidien. Notre association œuvre pour créer des moments de partage,
          d’engagement et de solidarité. Dans cette section, vous pourrez en
          apprendre davantage sur notre histoire, nos valeurs et les projets qui
          nous tiennent à cœur. Explorez notre équipe, nos initiatives et
          laissez-vous inspirer par notre vision.
        </p>
      </div>
      <div className="section__content">
        <TeamGallery />
      </div>
    </section>
  );
}