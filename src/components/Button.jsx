export function ButtonBig({ text, link }) {
  return (
    <div className='big button'>
      <a href={link} target='_blank' rel='noreferrer'>
        {text}
      </a>
    </div>
  )
}

export function ButtonLink({ text, link }) {
  return (
    <div className='primary button'>
      <a href={link}>
        <div>
          {text}
        </div>
      </a>
    </div>
  )
}