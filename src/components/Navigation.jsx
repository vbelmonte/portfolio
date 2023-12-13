import logo from '../assets/Logo.svg'
import { useState } from 'react'

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  const onScroll = () => {
    if (window.scrollY >= (window.innerHeight * 0.9)) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }

  window.addEventListener('scroll', onScroll);

  if (scrolled) {
    return (
      <nav className='collapsed'>
        <div>
          <img src={logo} />
        </div>
        <div className='links'>
          <a className='underline-hover black' href='#about-me'>About Me</a>
          <a className='underline-hover black' href='#projects'>Projects</a>
          <a className='underline-hover black' href='#skills-expertise'>Skills & Expertise</a>
          <a className='underline-hover black' href='#contact'>Contact</a>
        </div>
      </nav>
    )
  } else {
    return (
      <nav>
        <div>
          <img src={logo} />
        </div>
        <div className='links'>
          <a className='underline-hover black' href='#about-me'>About Me</a>
          <a className='underline-hover black' href='#projects'>Projects</a>
          <a className='underline-hover black' href='#skills-expertise'>Skills & Expertise</a>
          <a className='underline-hover black' href='#contact'>Contact</a>
        </div>
      </nav>
    )
  }
}