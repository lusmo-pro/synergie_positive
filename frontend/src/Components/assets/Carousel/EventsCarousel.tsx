"use client";

import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import events from "@/data/events.json";
import tagColors from "@/data/TagsColors";
import "@/Components/assets/Carousel/EventsCards.scss";
import "@/Components/assets/Carousel/EventsCarousel.scss";
import "./EventsCarouselDropdown.scss";

export default function EventsCarousel() {
  const [selectedGenre, setSelectedGenre] = useState<string>("Tous");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const genres = Array.from(new Set(events.map((e) => e.genre)));

  const filteredEvents =
    selectedGenre === "Tous"
      ? events
      : events.filter((event) => event.genre === selectedGenre);

  // 🔹 Fermer dropdown si clic à l'extérieur
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="events-carousel-container">
      {/* --- Dropdown de genres --- */}
      <div className="events-dropdown" ref={dropdownRef}>
        <div
          className="events-dropdown__button"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          {selectedGenre}
        </div>
        <div
          className={`events-dropdown__list ${
            dropdownOpen ? "active" : ""
          }`}
        >
          <div
            className="events-dropdown__item"
            onClick={() => {
              setSelectedGenre("Tous");
              setDropdownOpen(false);
            }}
          >
            <span className="events-dropdown__item__tag" style={{ backgroundColor: "#888" }} />
            Tous
          </div>
          {genres.map((genre) => (
            <div
              key={genre}
              className="events-dropdown__item"
              onClick={() => {
                setSelectedGenre(genre);
                setDropdownOpen(false);
              }}
            >
              <span
                className="events-dropdown__item__tag"
                style={{ backgroundColor: tagColors[genre.split(" ")[0]] || "#ccc" }}
              />
              {genre}
            </div>
          ))}
        </div>
      </div>

      {/* --- Carrousel --- */}
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1.2}
        centeredSlides={true}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 },
          640: { slidesPerView: 1, spaceBetween: 15 },
          768: { slidesPerView: 1.2, spaceBetween: 15 },
          1024: { slidesPerView: 1.2, spaceBetween: 20 },
        }}
      >
        {filteredEvents.map((event) => (
          <SwiperSlide key={event.id}>
            <div className="events-gallery__card">
              <img
                className="events-gallery__image"
                src={event.cover}
                alt={event.title}
              />
              <div className="events-gallery__content">
                <div className="events-gallery__header">
                  <h2 className="events-gallery__title">{event.title}</h2>
                  <div className="events-gallery__tags">
                    {event.genre.split(" ").map((word, index) => (
                      <span
                        key={index}
                        className="events-gallery__tag"
                        style={{
                          backgroundColor: tagColors[word] || "#E0E0E0",
                          color: "white",
                        }}
                      >
                        {word}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="events-gallery__details">
                  <div className="events-gallery__detail">
                    <img
                      src="/icons/date.svg"
                      alt="Date"
                      className="events-gallery__icon"
                    />
                    <p className="events-gallery__text">
                      {new Date(event.date).toLocaleDateString("fr-FR", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                  <div className="events-gallery__detail">
                    <img
                      src="/icons/hour.svg"
                      alt="Heure"
                      className="events-gallery__icon"
                    />
                    <p className="events-gallery__text">{event.time}</p>
                  </div>
                  <div className="events-gallery__detail">
                    <img
                      src="/icons/location.svg"
                      alt="Adresse"
                      className="events-gallery__icon"
                    />
                    <p className="events-gallery__text">
                      {event.location.city}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}