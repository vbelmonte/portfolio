import { ButtonBig } from './Button'
import { ProjectCard } from './ProjectCard'
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
            <ProjectCard
              projectName='Art A Day'
              projectType='Front End Development'
              projectImg={placeholder}
              projectLink='#projects'
            />
            <ProjectCard
              projectName='Art A Day'
              projectType='Front End Development'
              projectImg={placeholder2}
              projectLink='#projects'
            />
            <ProjectCard
              projectName='Art A Day'
              projectType='Front End Development'
              projectImg={placeholder}
              projectLink='#projects'
            />
            <ProjectCard
              projectName='Art A Day'
              projectType='Front End Development'
              projectImg={placeholder}
              projectLink='#projects'
            />
          </div>
          <div>
            <ButtonBig
              text='View all my projects on Github →'
              link='https://github.com/vbelmonte'
            />
          </div>
        </div>
      </div>
    </section>
  )
}