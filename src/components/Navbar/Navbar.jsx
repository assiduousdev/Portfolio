import React, { useRef } from 'react'

import './Navbar.css';

export default function Navbar() {
  // TODO: Make this Navbar component reuseable (e.g., pass the socials as a prop, make fixed paddings configurable)
  
  const navLinks = useRef();
  const navLinksBg = useRef();

  const socials = [
    {
      label: "LinkedIn",
      url: "#"
    }, 
    {
      label: "GitHub",
      url: "#"
    }
  ];

  function handleMouseOverAndFocus(e) {
    const activeLink = e.currentTarget;
    const insetPadding = 16;
    const insetRight = navLinks.current.getBoundingClientRect().right - e.currentTarget.getBoundingClientRect().right - insetPadding;
    const insetLeft =  activeLink.getBoundingClientRect().left - navLinks.current.getBoundingClientRect().left - insetPadding;
    
    navLinksBg.current.classList.add("active");
    navLinksBg.current.style = `inset: 5px ${insetRight}px 5px ${insetLeft}px;`;
  }

  function handleMouseOutAndBlur() {
    navLinksBg.current.classList.remove("active");
  }

  return (
    <nav className='navbar container'>
      <p className='navbar__logo heading-600'>assiduous</p>

      <ul className='navbar__links' ref={navLinks}>
        <li>
          <div ref={navLinksBg}></div>
        </li>

        {
          socials.map((s) => (
            <li 
              onMouseOver={handleMouseOverAndFocus} 
              onFocus={handleMouseOverAndFocus} 

              onMouseOut={handleMouseOutAndBlur}
              onBlur={handleMouseOutAndBlur}

              key={s.label}
            >
              <a href={s.url}>{s.label}</a>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}
