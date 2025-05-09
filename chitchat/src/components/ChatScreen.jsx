import React, { useState } from 'react';
import Nav from './Nav.jsx';
import Main from './Main.jsx';

// Dummy group data
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

// Dummy user data
const dummyUsers = [
  {
    id: 1,
    name: 'John Doe',
    lastMessage: 'Hello!',
    time: '12:30 PM',
    messages: ['Hi John', 'How are you?']
  },
  {
    id: 2,
    name: 'Jane Smith',
    lastMessage: 'Hi there!',
    time: '1:00 PM',
    messages: ['Hello Jane', 'What\'s up?']
  }
];

export default function ChatScreen() {
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div className='bg-[#d7dad9] bg-cover min-h-screen flex justify-center items-center'>
      <div className="grid grid-flow-col grid-rows-3 gap-4 w-full max-w-[1400px] h-[90vh] sm:h-[750px] bg-[#ffffff] rounded-2xl p-4">
        {/* Sidebar */}
        <div className="row-span-3">
          <div className="flex flex-col">
            <div className='w-[500px] h-[55px] bg-[#def2fa] rounded-2xl'>
              <Nav
                setSelectedGroup={setSelectedGroup}
                setSelectedUser={setSelectedUser} // ✅ added this
                dummyGroups={dummyGroups}
                dummyUsers={dummyUsers}           // ✅ and this
              />
            </div>
          </div>
        </div>

        {/* Main Chat Window */}
        <div className="col-span-2 row-span-3">
          {selectedGroup ? (
            <Main selectedGroup={selectedGroup} />
          ) : selectedUser ? (
            <Main selectedGroup={selectedUser} />
          ) : (
            <div className="flex items-center justify-center h-full text-gray-500">
              Select a group or user to start chatting
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
