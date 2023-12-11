export function SoftSkillCard({ skill, description }) {
  return (
    <div className='soft-skill-listing'>
      <h6>{skill}</h6>
      <p>{description}</p>
    </div>
  )
}