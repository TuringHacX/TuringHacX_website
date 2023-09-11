import React from 'react'

const Info = () => {
  return (
    <div id='about' className='flex flex-col text-center justify-center items-center gap-y-6'>
      <div>
      <h1
          className='text-zinc-100 sm:text-5xl text-3xl font-bold'
        >
          About
        </h1>
      </div>
      <div
        className='bg-black text-zinc-100 sm:w-[400px] w-[300px] sm:p-8 p-6 text-center rounded-lg border border-white opacity-80 text-[18px] '
      >
        TuringHacX is a 48 hour hackathon which will be conducted in Pandit Deendayal Energy University, Gandhinagar India
      </div>
    </div>
  )
}

export default Info
