"use client";

import { useState, useRef, useEffect } from "react";
import tagColors from "@/data/TagsColors";
import "@/Components/assets/Carousel/Dropdown.scss"

interface DropdownProps {
  options: string[];
  selected: string;
  onSelect: (value: string) => void;
}

export default function Dropdown({ options, selected, onSelect }: DropdownProps) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // 🔹 Fermer dropdown si clic à l'extérieur
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="events-dropdown" ref={dropdownRef}>
      <div
        className="events-dropdown__button"
        onClick={() => setOpen(!open)}
      >
        {selected}
      </div>
      <div className={`events-dropdown__list ${open ? "active" : ""}`}>
        <div
          className="events-dropdown__item"
          onClick={() => {
            onSelect("Tous");
            setOpen(false);
          }}
        >
          <span className="events-dropdown__item__tag" style={{ backgroundColor: "#888" }} />
          Tous
        </div>
        {options.map((option) => (
          <div
            key={option}
            className="events-dropdown__item"
            onClick={() => {
              onSelect(option);
              setOpen(false);
            }}
          >
            <span
              className="events-dropdown__item__tag"
              style={{ backgroundColor: tagColors[option.split(" ")[0]] || "#ccc" }}
            />
            {option}
          </div>
        ))}
      </div>
    </div>
  );
}
