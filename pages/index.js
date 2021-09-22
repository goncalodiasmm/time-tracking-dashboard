import { useState } from 'react'
import data from '../data/data.json'
import Head from 'next/head'
import Attribution from '../components/Attribution'
import Card from '../components/Card'

export default function Home() {
  const [timeframe, setTimeframe] = useState('weekly')
  let text =
    timeframe === 'daily'
      ? 'Yesterday'
      : timeframe === 'weekly'
      ? 'Last Week'
      : timeframe === 'monthly'
      ? 'Last Month'
      : ''

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-[#0f1424] text-white gap-5 py-16'>
      <Head>
        <title>Time Tracking Dashboard | Frontend Mentor</title>
        <link rel='icon' href='/favicon-32x32.png' />
      </Head>

      <div className='flex flex-col md:flex-row md:items-stretch gap-5'>
        <div className='w-64 md:w-48'>
          <header className='relative z-10 p-4 bg-[#5847eb] rounded-lg md:pb-11'>
            <div className='flex items-center md:flex-col md:items-start gap-3'>
              <img
                src='./image-jeremy.png'
                alt='user'
                className='w-12 border-2 rounded-full'
              />
              <div className='flex flex-col'>
                <p className='text-xs text-[#bdc1ff]'>Report for</p>
                <h2 className='text-lg font-light md:text-2xl'>
                  Jeremy Robson
                </h2>
              </div>
            </div>
          </header>
          <main className='relative -mt-2  bg-[#1c1f4a] p-4 pt-6 rounded-lg font-light text-sm text-[#6f76c8]'>
            <ul className='flex items-center md:flex-col md:items-start md:gap-2 justify-between'>
              {['daily', 'weekly', 'monthly'].map((time) => (
                <li
                  id={time}
                  onClick={(e) => setTimeframe(e.target.id)}
                  className={`cursor-pointer capitalize ${
                    time === timeframe && 'text-white'
                  }`}
                >
                  {time}
                </li>
              ))}
            </ul>
          </main>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5'>
          {data.map((card) => (
            <Card card={card} timeframe={timeframe} text={text} />
          ))}
        </div>
      </div>
      <Attribution />
    </div>
  )
}
