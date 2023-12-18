export function SoftSkillCard({ skill, description }) {
  return (
    <div className='soft-skill-listing'>
      <div className='soft-skill-name'>
        <h6>{skill}</h6>
      </div>
      <p>{description}</p>
    </div>
  )
}