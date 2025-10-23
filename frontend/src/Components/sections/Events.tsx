"use client";

import { useState } from "react";
import Dropdown from "@/Components/assets/Carousel/Dropdown";
import EventsCarousel from "@/Components/assets/Carousel/EventsCarousel";
import events from "@/data/events.json";
import "./Events.scss"

export default function SectionEvents() {
  const [selectedGenre, setSelectedGenre] = useState<string>("Tous");

   const genres = Array.from(new Set(events.map((e) => e.genre)));
   
    const filteredEvents =
    selectedGenre === "Tous"
      ? events
      : events.filter((event) => event.genre === selectedGenre);

   return (
    <section id="Events" className="section-events">
      <div className="section-events__header">
        <h2 className="section-events__title">Nos Événements</h2>
        <p className="section-events__description">
          Retrouvez l`intégralité de nos prochains événements ainsi que tous
          leurs détails. Pour toute question, n`hésitez pas à nous contacter.
          Ci-dessous, vous pourrez découvrir nos événements les plus proches ;
          plus vous défilerez vers la droite, plus ils se dérouleront dans le
          futur.
        </p>
      </div>
       {/* Dropdown pour filtrer */}
      <Dropdown
        options={genres}
        selected={selectedGenre}
        onSelect={setSelectedGenre}
      />
      <EventsCarousel events={filteredEvents} />
    </section>
  );
}
