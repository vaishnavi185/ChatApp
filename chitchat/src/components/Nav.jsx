import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faUser, faUsers, faPlus, faPalette } from '@fortawesome/free-solid-svg-icons';
import GroupCard from './GroupCard';
import Card from './Card'; // User card component

export default function Nav({ setSelectedGroup, setSelectedUser, dummyGroups, dummyUsers }) {
  const [showUserCards, setShowUserCards] = useState(false);

  const handleGroupClick = (groupData) => {
    setSelectedGroup(groupData);
    setSelectedUser(null);
    setShowUserCards(false);
  };

  const handleUserClick = () => {
    setSelectedUser(null);
    setSelectedGroup(null);
    setShowUserCards(true); // This is what makes the user cards appear
  };
  const handleGropuClick = () => {
    setSelectedUser(null);
    setSelectedGroup(null);
    setShowUserCards(false); // This is what makes the user cards appear
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
            <button title="Create">
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

      {/* Group List or User Cards */}
      <div className="mt-5">
        {!showUserCards ? (
          dummyGroups.map((group) => (
            <GroupCard key={group.id} dummyData={group} onClick={handleGroupClick} />
          ))
        ) : (
          <Card data={dummyUsers} onCardClick={handleCardClick} />
        )}
      </div>
    </div>
  );
}
