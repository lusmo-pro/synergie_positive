"use client";

import { useState } from "react";
import gallery from "@/data/gallery.json";
import "@/Components/assets/ImagesGallery/ImagesGallery.scss";
import "swiper/css";
import "swiper/css/navigation";

export default function GalleryLightbox() {
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
      {gallery.map((item, index) => (
        <div key={item.id} className="gallery-card">
          <img
            src={item.url}
            alt={item.title}
            onClick={() => setSelectedIndex(index)}
          />
        </div>
      ))}

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

            {/* Flèches Swiper style */}
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
