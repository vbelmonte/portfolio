export function ButtonPrimary({ text }) {
  return (
    <button className='primary' type='button'>
      <div>
        {text}
      </div>
      <div>
        →
      </div>
    </button>
  )
}

export function ButtonBig({ text }) {
  return (
    <button className='big' type='button'>
      <div>
        {text}
      </div>
    </button>
  )
}