import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';

export default function GroupCard({ onClick, dummyData }) {
  return (
    <div
      onClick={() => onClick(dummyData)} // Call parent click handler with this group data
      className="w-[470px] h-[65px] bg-[#ffffff] rounded-2xl flex ml-4 flex-row gap-x-[5px] cursor-pointer"
    >
      <div className="ml-2 mt-2">
        <FontAwesomeIcon icon={faUsers} size="3x" style={{ color: "#c6c5c5" }} />
      </div>
      <div className="flex flex-col mt-2">
        <div className="text-[18px] font-semibold text-[#000000]">{dummyData.name}</div>
        <div className="text-[14px] font-normal text-[#000000]">{dummyData.lastMessage}</div>
      </div>
      <div className="ml-auto mt-2 mr-4">
        <div className="text-[12px] font-normal text-[#000000]">{dummyData.time}</div>
      </div>
    </div>
  );
}