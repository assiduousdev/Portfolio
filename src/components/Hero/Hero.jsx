import React, { useEffect, useState } from "react"

import Navbar from "../Navbar/Navbar";

import "./Hero.css";

export default function Hero() {
  const MAX_ANIMATION_LENGTH_IN_MILLISECONDS = 400;

  const heading = "Transforming ideas into Impactful software";
  const characters = heading.split("");

  function getHeadingMarkup() {
    let formatted = "";
    for (let i = 0; i < characters.length; i++) {
      const char = characters[i];
      const delay = MAX_ANIMATION_LENGTH_IN_MILLISECONDS / characters.length * i;

      if (i === 0) {
        formatted += "<span class=\"word\">" + buildCharacterTemplate(delay, char);
      } else if (i === characters.length - 1) {
        formatted += buildCharacterTemplate(delay, char) + "</span>";
      } else if (char === " ") {
        formatted += "</span> <span class=\"word\">"
      } else {
        formatted += buildCharacterTemplate(delay, char);
      }
    }

    console.log(formatted);
    return { __html: formatted };
  }

  function buildCharacterTemplate(delay, char) {
    return `<span class="char animate" style="--delay: ${delay}ms">${char}</span>`;
  }

  return (
    <header className="hero">
      <Navbar />

      <section>
        <h1 style={{ "--length":  `${MAX_ANIMATION_LENGTH_IN_MILLISECONDS}ms`}} dangerouslySetInnerHTML={getHeadingMarkup()}></h1>

        <div className="hero__card">
          <div className="hero__card-img">
            <img src="/profile-picture.png" alt="Profile picture of Christian" />
          </div>

          <div className="hero__card-description">
            <h2>Christian Lhie Besmanos</h2>
            <p>Front-End Developer</p>
          </div>
        </div>
      </section>
    </header>
  )
}
