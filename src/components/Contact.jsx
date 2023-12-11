import { ButtonLink } from './Button'

export function Contact() {
  return (
    <section id='contact'>
      <div className='display-flex flex-column content'>
        <div className='catchphrase'>
          <h1>Send me a message if you would like to work with me or need my expertise on your next project</h1>
        </div>
        <div className='display-flex justify-content-end'>
          <ButtonLink
            text='villybelmonte@gmail.com'
            link='mailto:villybelmonte@gmail.com'
           />
        </div>
      </div>
    </section>
  )
}