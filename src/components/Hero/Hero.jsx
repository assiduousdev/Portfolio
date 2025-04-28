import React from "react"

import Navbar from "../Navbar/Navbar";

import "./Hero.css";

export default function Hero() {
  return (
    <header className="hero">
      <Navbar />

      <section>
        <h1>Transforming ideas into Impactful software</h1>

        <div className="hero__card">
          <div className="hero__card-img">
            <img src="/public/profile-picture.png" alt="Profile picture of Christian" />
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
