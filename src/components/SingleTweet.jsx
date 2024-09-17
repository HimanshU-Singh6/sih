import React from 'react'

const SingleTweet = ({data}) => {
  return (
    <div className=' hover:cursor-pointer h-[300px] w-full overflow-hidden font-mont flex flex-col border-b-2'>
        <h2 className='font-regular m-2 text-4xl capitalize'>{data.disaster},
          <span className='text-lg ml-1 font-light text-slate-500 opacity-90'>{data.location}</span>
        </h2>
        <div className='h-[150px] self-center'>
            <img className='h-full self-center' src={data.img} alt="Product Image" />
        </div>
        <div className='flex flex-col justify-start items-start m-2 gap-4'>
            <p className='text-sm text-slate-500 opacity-80'>{data.date}</p>
            <p className='text-sm'>{data.desc}</p>
        </div>
    </div>
  )
}

export default SingleTweet