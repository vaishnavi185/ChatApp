import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faUser, faUsers, faPlus, faPalette } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link'; // Import Link from next/link

export default function Nav() {
  return (
    <div className="flex flex-row gap-[14vw]">
      <div className="ml-2 mt-3">
        <Link href="/profile"> {/* Route for Profile */}
          <FontAwesomeIcon
            icon={faCircleUser}
            size="2x"
            style={{ color: "#007bff" }} // Consistent blue color
          />
        </Link>
      </div>
      <div className="flex flex-row-reverse gap-[2vw] mr-2 mt-3">
        <div>
          <Link href="/theme"> {/* Route for Theme */}
            <FontAwesomeIcon
              icon={faPalette}
              size="lg"
              style={{ color: "#007bff" }}
            />
          </Link>
        </div>
        <div>
          <Link href="/add"> {/* Route for Add */}
            <FontAwesomeIcon
              icon={faPlus}
              size="lg"
              style={{ color: "#007bff" }}
            />
          </Link>
        </div>
        <div>
          <Link href="/groups"> {/* Route for Groups */}
            <FontAwesomeIcon
              icon={faUsers}
              size="lg"
              style={{ color: "#007bff" }}
            />
          </Link>
        </div>
        <div>
          <Link href="/Card"> {/* Route for User */}
            <FontAwesomeIcon
              icon={faUser}
              size="lg"
              style={{ color: "#007bff" }}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
