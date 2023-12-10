import { ButtonBig } from './Button'
import placeholder from '../assets/photos/placeholder.jpg'
import placeholder2 from '../assets/photos/placeholder-2.png'

export function Projects() {
  return (
    <section id='projects' className='display-flex'>
      <div className='display-flex gap-48 container'>
        <div className='display-flex flex-column justify-space-between left'>
          <h1 className='uppercase'>Featured Projects</h1>
          <h1 className='gray'>02</h1>
        </div>
        <div className='display-flex flex-column gap-80 right'>
          <div className='project-grid'>
            <div className='card'>
                <img src={placeholder}/>
                <div>
                  <h6>Art A Day</h6>
                  <figcaption>Front End Development</figcaption>
                </div>
            </div>
            <div className='card'>
                <img src={placeholder2}/>
                <div>
                  <h6>Art A Day</h6>
                  <figcaption>Front End Development</figcaption>
                </div>
            </div>
            <div className='card'>
                <img src={placeholder}/>
                <div>
                  <h6>Art A Day</h6>
                  <figcaption>Front End Development</figcaption>
                </div>
            </div>
            <div className='card'>
                <img src={placeholder}/>
                <div>
                  <h6>Art A Day</h6>
                  <figcaption>Front End Development</figcaption>
                </div>
            </div>
          </div>
          <div>
            <ButtonBig text='View all my projects on Github →' />
          </div>
        </div>
      </div>
    </section>
  )
}