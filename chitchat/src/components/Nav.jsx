import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faUser, faUsers, faPlus, faPalette } from '@fortawesome/free-solid-svg-icons';
import GroupCard from './GroupCard';
import Card from './Card'; // User card component
import UserList from './UserList';


export default function Nav({ setSelectedGroup, setSelectedUser, dummyGroups, dummyUsers }) {
  const [showUserCards, setShowUserCards] = useState(false);
  const [showUserList, setShowUserList] = useState(false); // State for user list

  const handleGroupClick = (groupData) => {
    setSelectedGroup(groupData);
    setSelectedUser(null);
    setShowUserCards(false);
    setShowUserList(false); // Hide user list
  };

  const handleUserClick = () => {
    setSelectedUser(null);
    setSelectedGroup(null);
    setShowUserCards(true);
    setShowUserList(false); // Hide user list
  };

  const handleGropuClick = () => {
    setSelectedUser(null);
    setSelectedGroup(null);
    setShowUserCards(false);
    setShowUserList(false); // Hide user list
  };

  const handleCreateClick = () => {
    setShowUserList(true); // Show user list
    setShowUserCards(false);
    setSelectedGroup(null);
    setSelectedUser(null);
  };

  const handleCardClick = (userData) => {
    setSelectedUser(userData);
    setSelectedGroup(null);
  };

  return (
    <div>
      {/* Navbar */}
      <div className="flex flex-row gap-[14vw]">
        <div className="ml-2 mt-3">
          <button title="Profile">
            <FontAwesomeIcon icon={faCircleUser} size="2x" style={{ color: "#007bff" }} />
          </button>
        </div>
        <div className="flex flex-row-reverse gap-[2vw] mr-2 mt-3">
          <div>
            <button title="Themes">
              <FontAwesomeIcon icon={faPalette} size="lg" style={{ color: "#007bff" }} />
            </button>
          </div>
          <div>
            <button onClick={handleCreateClick} title="Create"> {/* Updated */}
              <FontAwesomeIcon icon={faPlus} size="lg" style={{ color: "#007bff" }} />
            </button>
          </div>
          <div>
            <button onClick={handleGropuClick} title="Groups">
              <FontAwesomeIcon icon={faUsers} size="lg" style={{ color: "#007bff" }} />
            </button>
          </div>
          <div>
            <button onClick={handleUserClick} title="Users">
              <FontAwesomeIcon icon={faUser} size="lg" style={{ color: "#007bff" }} />
            </button>
          </div>
        </div>
      </div>

      {/* Group List, User Cards, or User List */}
      <div className="mt-5">
        {!showUserCards && !showUserList ? (
          dummyGroups.map((group) => (
            <GroupCard key={group.id} dummyData={group} onClick={handleGroupClick} />
          ))
        ) : showUserCards ? (
          <Card data={dummyUsers} onCardClick={handleCardClick} />
        ) : (
         <UserList /> // Render the List component
        )}
      </div>
    </div>
  );
}