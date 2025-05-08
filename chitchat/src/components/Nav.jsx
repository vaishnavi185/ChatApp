import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faUser, faUsers, faPlus, faPalette } from '@fortawesome/free-solid-svg-icons';
import GroupCard from './GroupCard';
import Card from './Card';

export default function Nav() {
  const [activeComponent, setActiveComponent] = useState('profile'); // Default component
  const handleGroupClick = (groupData) => {
    console.log('Group clicked:', groupData);
    // You can add additional logic here, such as navigating to a group chat
  };
  const dummyGroups = [
    { id: 1, name: 'Group A', lastMessage: 'Hello!', time: '10:00 AM' },
    { id: 2, name: 'Group B', lastMessage: 'How are you?', time: '11:15 AM' },
  ];
  
  // Components to render
  const renderComponent = () => {
    switch (activeComponent) {
      case 'profile':
        return <div>Profile Component</div>;
      case 'theme':
        return <div>Theme Component</div>;
      case 'add':
        return <div>Add Component</div>;
        case 'groups':
          return (
            <div className="flex flex-col gap-2">
              {dummyGroups.map((group) => (
                <GroupCard
                  key={group.id}
                  dummyData={group}
                  onClick={handleGroupClick}
                />
              ))}
            </div>
          );
        
      case 'user':
        return <div><Card></Card></div>;
      default:
        return <div>Profile Component</div>;
    }
  };

  return (
    <div>
      {/* Navbar */}
      <div className="flex flex-row gap-[14vw]">
        <div className="ml-2 mt-3">
          <button onClick={() => setActiveComponent('profile')}> {/* Set active component */}
            <FontAwesomeIcon
              icon={faCircleUser}
              size="2x"
              style={{ color: "#007bff" }}
            />
          </button>
        </div>
        <div className="flex flex-row-reverse gap-[2vw] mr-2 mt-3">
          <div>
            <button onClick={() => setActiveComponent('theme')}>
              <FontAwesomeIcon
                icon={faPalette}
                size="lg"
                style={{ color: "#007bff" }}
              />
            </button>
          </div>
          <div>
            <button onClick={() => setActiveComponent('add')}>
              <FontAwesomeIcon
                icon={faPlus}
                size="lg"
                style={{ color: "#007bff" }}
              />
            </button>
          </div>
          <div>
            <button onClick={() => setActiveComponent('groups')}>
              <FontAwesomeIcon
                icon={faUsers}
                size="lg"
                style={{ color: "#007bff" }}
              />
            </button>
          </div>
          <div>
            <button onClick={() => setActiveComponent('user')}>
              <FontAwesomeIcon
                icon={faUser}
                size="lg"
                style={{ color: "#007bff" }}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Render the active component */}
      <div className="mt-5">
        {renderComponent()}
      </div>
    </div>
  );
}