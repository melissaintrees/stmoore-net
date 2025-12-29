import React from 'react';

const BandcampPlayer: React.FC<{ embedCode: string }> = ({ embedCode }) => {
  return (
    <div className='mt-2 mb-6'
      dangerouslySetInnerHTML={{ __html: embedCode }}
    />
  );
};

export default BandcampPlayer;