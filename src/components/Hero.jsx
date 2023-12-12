import { ButtonLink } from "./Button"
import portrait from '../assets/photos/BW_Portrait_Small.jpg'

export function Hero() {
  return (
    <header>
      <div className='left display-flex flex-column justify-center'>
        <div className='container display-flex flex-column gap-80'>
          <div className='content display-flex flex-column gap-48'>
            <h3>
              Villy Belmonte
            </h3>
            <h1>
              Front End Web Developer based in Southern California
            </h1>
            <h6>
              I build sites and applications with the end user in mind
            </h6>
          </div>
          <ButtonLink
            text='View my work →'
            link='#projects'
          />
        </div>
      </div>
      <div className='right'>
        <img src={portrait}/>
      </div>
    </header>
  )
}