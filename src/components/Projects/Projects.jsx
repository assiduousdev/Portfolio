import React, { useEffect, useRef } from 'react'
import { useTheme } from "../ThemeProvider/ThemeProvider";

import "./Projects.css";

export default function Projects() {
  const projectsRef = useRef();
  const { themeManager } = useTheme();
  
  useEffect(function() {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: [0.5]
    };
    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            themeManager.toDark();
            return;
        }

        themeManager.toLight();
      });
    }, options);

    observer.observe(projectsRef.current);

  }, []);

  return (
    <section ref={projectsRef} className="projects">
      <h2 className="heading-800">Projects</h2>
    </section>
  )
}
