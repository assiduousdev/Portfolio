import React from "react"

import Navbar from "../Navbar/Navbar";

import "./Hero.css";

export default function Hero() {
  const MAX_ANIMATION_LENGTH_IN_MILLISECONDS = 600;

  const heading = "Transforming ideas into impactful software";
  const characters = heading.split("");

  const animationDelays = MAX_ANIMATION_LENGTH_IN_MILLISECONDS / characters.length; 

  function getHeadingMarkup() {
    let formatted = "";
    for (let i = 0; i < characters.length; i++) {
      const char = characters[i];
      const delay = animationDelays * i;

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

    return { __html: formatted };
  }

  function buildCharacterTemplate(delay, char) {
    return `<span class="char animate" style="--delay: ${delay}ms">${char}</span>`;
  }

  return (
    <header className="hero">
      <Navbar />

      <section 
        style={{ "--length":  `${MAX_ANIMATION_LENGTH_IN_MILLISECONDS}ms`}}
      >
        <h1 dangerouslySetInnerHTML={getHeadingMarkup()}></h1>

        <div className="hero__card" >
          <div 
            className="hero__card-img"
            style={{ "--delay": `${ animationDelays * (characters.length + 1) }ms` }}
          >
            <img src="/profile-picture.png" alt="Profile picture of Christian" />
          </div>

          <div className="hero__card-description">
            <h2 
              style={{ "--delay": `${ animationDelays * (characters.length + 2) }ms` }}
            >
              Christian Lhie Besmanos
            </h2>
            <p 
              style={{ "--delay": `${ animationDelays * (characters.length + 3) }ms` }}
            >
              Front-End Developer
            </p>
          </div>
        </div>
      </section>
    </header>
  )
}
