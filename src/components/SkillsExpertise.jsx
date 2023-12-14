import { SoftSkillCard } from './SoftSkillCard'

export function SkillsExpertise() {
  return (
    <section id='skills-expertise' className='display-flex justify-center'>
      <div className='display-flex gap-48 container'>
        <div className='display-flex flex-column left'>
          <h1 className='uppercase'>Skills & Expertise</h1>
          <h1 className='gray'>03</h1>
        </div>
        <div className='display-flex flex-column gap-80 right'>
          <div className='display-flex flex-column gap-48'>
            <div>
              <h3 className='gray'>Hard Skills</h3>
            </div>
            <div className='hard-skills'>
              <div className='box'>
                <div className='content'>
                  <h6>Languages</h6>
                  <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                  </ul>
                </div>
              </div>
              <div className='box'>
                <div className='content'>
                  <h6>Frameworks</h6>
                  <ul>
                    <li>React.js</li>
                    <li>jQuery.js</li>
                  </ul>
                </div>
              </div>
              <div className='box'>
                <div className='content'>
                  <h6>Tools</h6>
                  <ul>
                    <li>Git</li>
                    <li>GitKraken</li>
                    <li>GitHub</li>
                    <li>Figma</li>
                    <li>Visual Studio Code</li>
                    <li>Webpack</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className='display-flex flex-column gap-48'>
            <div>
              <h3 className='gray'>Soft Skills</h3>
            </div>
            <div className='display-flex flex-column gap-48 soft-skills'>
              <div className='skills-grid'>
                <SoftSkillCard
                  skill='Communication'
                  description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu non odio euismod lacinia at.'
                />
                <SoftSkillCard
                  skill='Consultation'
                  description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu non odio euismod lacinia at.'
                />
                <SoftSkillCard
                  skill='Collaboration'
                  description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu non odio euismod lacinia at.'
                />
                <SoftSkillCard
                  skill='Problem Solving'
                  description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu non odio euismod lacinia at.'
                />
                <SoftSkillCard
                  skill='Prototyping'
                  description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu non odio euismod lacinia at.'
                />
                <SoftSkillCard
                  skill='Development'
                  description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu non odio euismod lacinia at.'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}