import React from 'react';

const Map = () => {
  return (
    <div className='flex flex-col items-center justify-center bg-primary-white rounded-2xl mt-10 max-w-md shadow-lg'>
      <iframe 
        src="./assets/maps/ensenada.html" 
        frameborder="0" 
        style={{ width: '100%', height: '100%' }}
      ></iframe>
    </div>
  );
};

export default Map;
