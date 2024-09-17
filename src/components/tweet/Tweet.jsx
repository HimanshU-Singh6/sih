import React from 'react';
import Map from '../map/Map';
import SingleTweet from '../SingleTweet';
import data from '../../dataset/data';
// import ChatbotComponent from './ChatbotComponent';



const Tweet = () => {
  return (
    <div className='flex flex-row min-h-screen max-h-screen'>
      <div className='w-1/3 bg-gray-100 flex flex-col'>
        {/* Logo */}
        <div className='flex-shrink-0'>
          <img className='w-full' src="/logo.png" alt="Crisis Guard" />
        </div>


        <div className='flex-grow overflow-auto'>

        {data.map(data => (
          <SingleTweet key={data.id} data = {data} />
        ) )}

        </div>
      </div>

      <div className='w-2/3 bg-blue-500'>
        <Map />
        {/* <ChatbotComponent /> */}
      </div>
    </div>
  );
};

export default Tweet;
