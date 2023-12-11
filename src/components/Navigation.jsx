import logo from '../assets/Logo.svg'

export function Navigation() {
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