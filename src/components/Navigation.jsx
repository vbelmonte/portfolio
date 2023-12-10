import logo from '../assets/Logo.svg'

export function Navigation() {
  return (
    <nav>
      <div>
        <img src={logo} />
      </div>
      <div className='links'>
        <a href='#about-me'>About Me</a>
        <a href='#projects'>Projects</a>
        <a href='#skills-expertise'>Skills & Expertise</a>
        <a href='#contact'>Contact</a>
      </div>
    </nav>
  )
}