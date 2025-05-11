import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faUser, faUsers, faPlus, faPalette } from '@fortawesome/free-solid-svg-icons';
import GroupCard from './GroupCard';
import Card from './Card';
import UserList from './UserList';

export default function Nav({ setSelectedGroup, setSelectedUser, dummyGroups }) {
  const [showUserCards, setShowUserCards] = useState(false);
  const [showUserList, setShowUserList] = useState(false);
  const [addedUsers, setAddedUsers] = useState([]);
  

  const handleGroupClick = (groupData) => {
    setSelectedGroup(groupData);
    setSelectedUser(null);
    setShowUserCards(false);
    setShowUserList(false);
  };

  const handleUserClick = () => {
    setSelectedUser(null);
    setSelectedGroup(null);
    setShowUserCards(true);
    setShowUserList(false);
  };

  const handleCreateClick = () => {
    setShowUserList(true);
    setShowUserCards(false);
    setSelectedGroup(null);
    setSelectedUser(null);
  };

  const handleCardClick = (userData) => {
    setSelectedUser(userData);
    setSelectedGroup(null);
  };

  const handleUserAdd = (newUser) => {
    if (!addedUsers.some((u) => u._id === newUser._id)) {
      setAddedUsers((prev) => [...prev, newUser]);
    }
    setShowUserCards(true);
    setShowUserList(false);
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
            <button onClick={handleCreateClick} title="Add Users">
              <FontAwesomeIcon icon={faPlus} size="lg" style={{ color: "#007bff" }} />
            </button>
          </div>
          <div>
            <button title="Groups" onClick={() => {
              setShowUserCards(false);
              setShowUserList(false);
              setSelectedUser(null);
              setSelectedGroup(null);
            }}>
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

      {/* Main content */}
      <div className="mt-5">
        {!showUserCards && !showUserList ? (
          dummyGroups.map((group) => (
            <GroupCard key={group.id} dummyData={group} onClick={handleGroupClick} />
          ))
        ) : showUserCards ? (
          <Card data={addedUsers} onCardClick={handleCardClick} />
        ) : (
          <UserList onUserAdd={handleUserAdd} />
        )}
      </div>
    </div>
  );
}
