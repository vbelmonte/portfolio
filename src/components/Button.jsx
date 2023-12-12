export function ButtonBig({ text, link }) {
  return (
    <a href={link} target='_blank' rel='noreferrer'>
      <div className='big button slide'>
        {text}
      </div>
    </a>
  )
}

export function ButtonLink({ text, link }) {
  return (
    <a href={link}>
      <div className='primary button slide'>
        {text}
      </div>
    </a>
  )
}