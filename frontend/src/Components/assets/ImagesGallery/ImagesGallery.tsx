"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";
import gallery from "@/data/gallery.json";
import "@/Components/assets/ImagesGallery/ImagesGallery.scss";

export default function GalleryImages() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const prevImage = () => {
    if (selectedIndex === null) return;
    setSelectedIndex(selectedIndex === 0 ? gallery.length - 1 : selectedIndex - 1);
  };

  const nextImage = () => {
    if (selectedIndex === null) return;
    setSelectedIndex(selectedIndex === gallery.length - 1 ? 0 : selectedIndex + 1);
  };

  return (
    <div className="images-gallery">
      {/* --- Swiper principal --- */}
      <Swiper
        slidesPerView={4}
        grid={{ rows: 2 }}
        spaceBetween={30}
        pagination={{ clickable: true }}
        modules={[Grid, Pagination]}
        className="mySwiper"
      >
        {gallery.map((item, index) => (
          <SwiperSlide key={item.id}>
            <div className="gallery-card">
              <img
                src={item.url}
                alt={item.title}
                onClick={() => setSelectedIndex(index)} // ouvre la lightbox
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* --- Lightbox / Modal --- */}
      {selectedIndex !== null && (
        <div className="modal-overlay" onClick={() => setSelectedIndex(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={gallery[selectedIndex].url}
              alt={gallery[selectedIndex].title}
              className="modal-image"
            />
            <div className="modal-info">
              <h2>{gallery[selectedIndex].title}</h2>
              <p>{gallery[selectedIndex].description}</p>
              {/* <small>{gallery[selectedIndex].date}</small> */}
            </div>

            {/* Flèches style Swiper */}
            <button className="swiper-button-prev" onClick={prevImage} />
            <button className="swiper-button-next" onClick={nextImage} />

            {/* Fermer */}
            <button className="modal-close" onClick={() => setSelectedIndex(null)}>✕</button>
          </div>
        </div>
      )}
    </div>
  );
}
