import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faUser, faUsers, faPlus, faPalette } from '@fortawesome/free-solid-svg-icons';

export default function Nav() {
  return (
    <div className="flex flex-row gap-[14vw]">
      <div className="ml-2 mt-3">
        <FontAwesomeIcon
          icon={faCircleUser}
          size="2x"
          style={{ color: "#007bff" }} // Consistent blue color
        />
      </div>
      <div className="flex flex-row-reverse gap-[2vw] mr-2 mt-3">
        <div>
          <FontAwesomeIcon icon={faPalette} size="lg" style={{ color: "#007bff" }} />
        </div>
        <div>
          <FontAwesomeIcon icon={faPlus} size="lg" style={{ color: "#007bff" }} />
        </div>
        <div>
          <FontAwesomeIcon icon={faUsers} size="lg" style={{ color: "#007bff" }} />
        </div>
        <div>
          <FontAwesomeIcon icon={faUser} size="lg" style={{ color: "#007bff" }} />
        </div>
      </div>
    </div>
  );
}
