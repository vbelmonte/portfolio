export function ProjectCard({ projectName, projectType, projectImg }) {
  return (
    <figure className='display-flex flex-column gap-8 card'>
      <img src={projectImg}/>
      <div className='display-flex flex-column gap-4'>
        <h6>{projectName}</h6>
        <figcaption>{projectType}</figcaption>
      </div>
    </figure>
  )
}