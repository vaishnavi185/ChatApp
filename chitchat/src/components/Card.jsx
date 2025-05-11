import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export default function Card({ data, onCardClick, onUserClick }) {
  const handleClick = (item) => {
    if (onCardClick) onCardClick(item);
    if (onUserClick) onUserClick(item);
  };

  return (
    <div className='flex flex-col gap-y-[10px]'>
      {data.map((item, index) => (
        <div
          key={index}
          className='w-[470px] h-[65px] bg-[#d7dad9] rounded-2xl flex ml-4 flex-row gap-x-[5px] cursor-pointer'
          onClick={() => handleClick(item)}
        >
          <div className='ml-2 mt-2'>
            <FontAwesomeIcon
              icon={faUser}
              size="3x"
              style={{ color: "#c6c5c5" }}
            />
          </div>
          <div className='flex flex-col mt-2'>
            <div className='text-[18px] font-semibold text-[#000000]'>{item.name}</div>
            <div className='text-[14px] font-normal text-[#000000]'>{item.lastMessage || '...'}</div>
          </div>
          <div className='ml-auto mt-2 mr-4'>
            <div className='text-[12px] font-normal text-[#000000]'>{item.time || ''}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
