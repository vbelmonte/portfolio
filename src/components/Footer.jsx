export function Footer() {
  return (
    <footer>
      <div className='display-flex flex-column gap-16'>
        <div className='display-flex flex-column gap-48 top'>
          <div className='display-flex flex-column gap-16'>
            <h3>Villy Belmonte</h3>
            <h1>Front End Web Developer based in Southern California</h1>
            <h6>I build sites and applications with the end user in mind</h6>
          </div>
          <div className='display-flex flex-column gap-8'>
            <p>Follow me and see more of my work:</p>
            <ul className='list-style-none display-flex flex-row gap-24'>
            <li>
              <a>Github</a>
            </li>
            <li>
              <a>Dribbble</a>
            </li>
            <li>
              <a>Behance</a>
            </li>
          </ul>
          </div>
        </div>
        <div>
          <p className='copyright'>Copyright © 2023 Villy Belmonte</p>
        </div>
      </div>
    </footer>
  )
}