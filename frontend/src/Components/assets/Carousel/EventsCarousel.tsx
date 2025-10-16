"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import events from "@/data/events.json";
import "@/Components/assets/Carousel/EventsCards.scss";
import "@/Components/assets/Carousel/EventsCarousel.scss";

export default function EventsCarousel() {
  return (
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
      {events.map((event) => (
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
                <p className="events-gallery__genre">{event.genre}</p>
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
                  <p className="events-gallery__text">{event.location.city}</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}