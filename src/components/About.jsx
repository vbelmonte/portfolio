export function About() {
  return (
    <section id='about-me' className='display-flex'>
      <div className='display-flex gap-48 container'>
        <div className='display-flex flex-column justify-space-between left'>
          <h1 className='uppercase'>About Me</h1>
          <h1 className='gray'>01</h1>
        </div>
        <div className='display-flex flex-column gap-80 right'>
          <div className='catchphrase'>
            <h2>I build sites and applications with the end user in mind</h2>
          </div>
          <div className='display-flex gap-80'>
            <div className='display-flex flex-column gap-16 content-column'>
              <h6>Summary</h6>
              <p>
                I am a Front End Web Developer with a focus on UI/UX. In an info-dense world, it is my goal to work with clients, organizations, and companies to develop solutions in delivering and presenting info that is coherent and tangible to their users. I am passionate about creating websites that are reliable and establish trust with users and providing them with a memorable, seamless user experience.
              </p>
            </div>
            <div className='display-flex flex-column gap-16 content-column'>
              <h6>My Backstory</h6>
              <p>
                When I graduated from university, I earned my degree in Mathematics with my area of focus on Computer Science. When I began my professional career, I started by working as a certified IT Technician.
              </p>
              <p>
                After working in IT for several years and many hours of reflection on my career path, I decided to switch to Front End Web Development. So far, it has been a fulfilling journey as my interests, skills, and goals are aligned with the type of work that Front End Web Development has to offer. I enjoy making apps and websites that help users conveniently accomplish tasks, and make their lives easier to navigate in an already complex world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}