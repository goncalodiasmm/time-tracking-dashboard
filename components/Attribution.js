const Attribution = () => {
  return (
    <div className='text-gray-700 flex flex-col md:flex-row items-center gap-1'>
      <div className='text-sm md:text-base'>
        Challenge by{' '}
        <a
          href='https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw'
          target='_blank'
          className='text-gray-400 hover:text-gray-300 transition'
        >
          Frontend Mentor
        </a>
        .
      </div>
      <div className='text-sm md:text-base'>
        Coded by{' '}
        <a
          href='https://github.com/goncalodiasmm'
          target='_blank'
          className='text-gray-400 hover:text-gray-300 transition'
        >
          Gonçalo Dias
        </a>
      </div>
    </div>
  )
}

export default Attribution
