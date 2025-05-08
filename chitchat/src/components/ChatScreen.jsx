import React, { useState } from 'react';
import Nav from './Nav.jsx';
import List from './List.jsx';
import Main from './Main.jsx';
import GroupCard from './GroupCard.jsx'; // Assuming the file is named group.jsx

// Dummy group data for demo purposes
const dummyGroups = [
  {
    id: 1,
    name: 'Group A',
    lastMessage: 'Hi from Group A',
    time: '10:00 AM',
    messages: ['Hello A', 'How are you?']
  },
  {
    id: 2,
    name: 'Group B',
    lastMessage: 'Hi from Group B',
    time: '11:00 AM',
    messages: ['Welcome to B', 'Let\'s start']
  }
];

export default function ChatScreen() {
  const [selectedGroup, setSelectedGroup] = useState(null);

  return (
    <div className='bg-[#d7dad9] bg-cover min-h-screen flex justify-center items-center'>
      <div className="grid grid-flow-col grid-rows-3 gap-4 w-full max-w-[1400px] h-[90vh] sm:h-[750px] bg-[#ffffff] rounded-2xl p-4">
        {/* Sidebar with Nav and Group List */}
        <div className="row-span-3">
          <div className="flex flex-col">
            <div className='w-[500px] h-[55px] bg-[#def2fa] rounded-2xl'>
              <Nav />
            </div>
            <div className="overflow-y-auto mt-2">
              
            </div>
          </div>
        </div>

        {/* Main Chat Window */}
        <div className="col-span-2 row-span-2">
          <Main selectedGroup={selectedGroup} />
        </div>
      </div>
    </div>
  );
}
