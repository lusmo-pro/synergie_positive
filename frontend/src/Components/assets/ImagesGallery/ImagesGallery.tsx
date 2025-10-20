"use client";

import "@/Components/assets/ImagesGallery/ImagesGallery.scss";
import gallery from "@/data/gallery.json";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Grid, Pagination } from "swiper/modules";

export default function GalleryImages() {
  return (
    <div className="images-gallery">
      <Swiper
        slidesPerView={4}
        grid={{
          rows: 2,
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination]}
        className="mySwiper"
      >
        {gallery.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="gallery-card">
              <img src={item.url} alt={item.title} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
