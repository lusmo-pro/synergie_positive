"use client";

import { useEffect, useRef } from "react";
import team from "@/data/team.json";
import "@/Components/assets/TeamGallery/TeamGallery.scss";

export default function TeamGallery() {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.boundingClientRect.top > 0) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 } // déclenche l'animation quand 20% du composant est visible
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="team-gallery">
      {team.map((member, index) => (
        <div
          key={member.id}
          className={`team-card ${index % 2 === 0 ? "left" : "right"}`}
          ref={(el) => {
            if (el) cardsRef.current[index] = el;
          }}
        >
          <img src={member.photo} alt={member.name} />
          <div className="team-card__content">
            <h3 className="name">{member.name}</h3>
            <p className="role">{member.role}</p>
            <p className="description">{member.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
