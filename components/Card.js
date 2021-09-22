import { RiMoreLine } from 'react-icons/ri'

const Card = ({ card, timeframe, text }) => {
  let currentHour, previousHour;
  card.timeframes[timeframe].current === 1 ? (currentHour = 'hr') : (currentHour = 'hrs')
  card.timeframes[timeframe].previous === 1 ? (previousHour = 'hr') : (previousHour = 'hrs')

  return (
    <article
      className='text-white rounded-lg overflow-hidden w-64 md:w-48'
      key={card.title.toLowerCase().split(' ').join('-')}
    >
      <header
        className='-my-2 h-12 relative'
        style={{ backgroundColor: `${card.themeColor}` }}
      >
        <img
          src={card.image}
          alt={card.title}
          className='w-14 absolute right-2'
        />
      </header>
      <main className='relative bg-[#1c1f4a] hover:bg-[#242758] transition rounded-lg px-6 py-4 flex flex-col gap-1'>
        <div className='flex justify-between items-center'>
          <h4 className='text-sm'>{card.title}</h4>
          <RiMoreLine className='text-[#bdc1ff] hover:text-white transition cursor-pointer text-2xl' />
        </div>
        <div className='flex flex-row md:flex-col items-center md:items-start justify-between'>
          <h2 className='text-2xl md:text-3xl font-light'>
            {card.timeframes[timeframe].current}
            {currentHour}
          </h2>
          <div className='text-[#6f76c8] text-xs'>
            {text} - {card.timeframes[timeframe].previous}
            {previousHour}
          </div>
        </div>
      </main>
    </article>
  )
}

export default Card
