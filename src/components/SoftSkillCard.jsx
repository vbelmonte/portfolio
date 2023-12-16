import chevron from '../assets/chevron.svg'

export function SoftSkillCard({ skill, description }) {
  return (
    <div className='soft-skill-listing'>
      <div className='soft-skill-name'>
        <h6>{skill}</h6>
        <img className='chevron' src={chevron} />
      </div>
      <p>{description}</p>
    </div>
  )
}