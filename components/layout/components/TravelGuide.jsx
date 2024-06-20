"use client";

import { useState, useEffect, useRef } from "react";

const travelGuide = [
  { title: "Nepal in brief", url: "/nepal-in-brief" },
  { title: "Nepal Visa Information", url: "/nepal-visa-information" },
  { title: "Equipment Checklist", url: "/equipment-checklist" },
  { title: "Best Trekking Season", url: "/best-season-for-trekking-in-nepal" },
  { title: "Trip Grade", url: "/best-season-for-trekking-in-nepal" },
  { title: "Travel Insurance", url: "/best-season-for-trekking-in-nepal" },
  { title: "Recommended Medical Kit", url: "/best-season-for-trekking-in-nepal" },
  { title: "Recommended Flights", url: "/best-season-for-trekking-in-nepal" }
];

export default function TravelGuide({ parentClass }) {
  const [currentdd, setCurrentdd] = useState("");
  const dropDownContainer = useRef();

  useEffect(() => {
    const handleClick = (event) => {
      if (
        dropDownContainer.current &&
        !dropDownContainer.current.contains(event.target)
      ) {
        setCurrentdd("");
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div
      ref={dropDownContainer}
      className={`${parentClass ? parentClass : "headerDropdown  js-form-dd"}`}
    >
      <div
        className="headerDropdown__button"
        onClick={() =>
          setCurrentdd((prev) => (prev === "currency" ? "" : "currency"))
        }
      >
        Travel Guide
        <i className="icon-chevron-down text-18"></i>
      </div>

      <div
        className={`headerDropdown__content ${
          currentdd === "currency" ? "is-active" : ""
        } `}
      >
        <div className="headerDropdown">
          <div className="headerDropdown__container">
            {travelGuide.map((item, index) => (
              <div
                onClick={() => {
                  setCurrentdd("");
                }}
                key={index}
                className="headerDropdown__item"
              >
                <a href={item.url} className="">
                  {item.title}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
