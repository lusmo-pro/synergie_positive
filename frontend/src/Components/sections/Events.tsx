import EventsCards from "@/components/assets/EventsCards";

import "./Events.scss";

export default function SectionEvents() {
  return (
    <section id="Events" className="section-events">
      <div className="section-events__header">
        <h2 className="section-events__title">Nos Événements</h2>
        <p className="section-events__description">
          Retrouvez l'intégralité de nos prochains événements ainsi que tous
          leurs détails. Pour toute question, n'hésitez pas à nous contacter.
          Ci-dessous, vous pourrez découvrir nos événements les plus proches ;
          plus vous défilerez vers la droite, plus ils se dérouleront dans le
          futur.
        </p>
      </div>
      <EventsCards />
    </section>
  );
}
