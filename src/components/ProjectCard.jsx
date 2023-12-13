export function ProjectCard({ projectName, projectType, projectImg, projectLink }) {
  return (
    <figure className='display-flex flex-column gap-8 card'>
      <a className='img-link underline-hover yellow' href={projectLink}>
        <img src={projectImg}/>
        <div className='display-flex flex-column gap-4'>
          <h6>{projectName}</h6>
          <figcaption>{projectType}</figcaption>
        </div>
      </a>
    </figure>
  )
}