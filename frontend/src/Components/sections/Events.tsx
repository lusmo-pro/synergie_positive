"use client";

import { useState } from "react";
import Dropdown from "@/Components/assets/Carousel/Dropdown";
import EventsCarousel from "@/Components/assets/Carousel/EventsCarousel";
import { Event } from "@/app/lib/googleSheets";
import "./Section.scss";

interface SectionEventsProps {
  events: Event[];
}

export default function SectionEvents({ events }: SectionEventsProps) {
  const [selectedGenre, setSelectedGenre] = useState<string>("Tous");

  const genres = Array.from(new Set(events.map((e) => e.genre)));
  genres.unshift("Tous"); // ajouter option Tous

  const filteredEvents =
    selectedGenre === "Tous"
      ? events
      : events.filter((event) => event.genre === selectedGenre);

  return (
    <section id="Events" className="section section--light">
      <div className="section__header">
        <h2 className="section__title">Nos Événements</h2>
        <p className="section__description">
          Retrouvez l`intégralité de nos prochains événements ainsi que tous
          leurs détails. Pour toute question, n`hésitez pas à nous contacter.
          Ci-dessous, vous pourrez découvrir nos événements les plus proches ;
          plus vous défilerez vers la droite, plus ils se dérouleront dans le
          futur.
        </p>
      </div>
      <Dropdown
        options={genres}
        selected={selectedGenre}
        onSelect={setSelectedGenre}
      />
      <div className="section__content">
        <EventsCarousel events={filteredEvents} />
      </div>
    </section>
  );
}
