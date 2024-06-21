"use client";

import { useState, useEffect, useRef } from "react";

const About = [
  { title: "Alpine treks", url: "/whoarewe" },
  { title: "Our Team", url: "/team" },
  { title: "Why Us", url: "/whyus" },
  { title: "Terms and Conditions", url: "/team" },
  { title: "Best Trekking Season", url: "/team" },
  { title: "How to Make a Payment ", url: "/team" },
  { title: "How to Book a Trip with us", url: "/team" },
  { title: "Privacy Policy", url: "/team" },
  { title: "Sustainable Tourims", url: "/team" },
  { title: "Legal Documents", url: "/team" },
  { title: "Risk Free Booking Policy", url: "/team" },
  { title: "Reviews", url: "/reviews" },
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
        className="headerDropdown__button" data-x-click = "header-currency"
        onClick={() =>
          setCurrentdd((prev) => (prev === "currency" ? "" : "currency"))
        }
      >
        About
        <i className="icon-chevron-down text-18"></i>
      </div>

      <div
        className={`headerDropdown__content ${
          currentdd === "currency" ? "is-active" : ""
        } `}
      >
        <div className="headerDropdown">
          <div className="headerDropdown__container">
            {About.map((item, index) => (
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






