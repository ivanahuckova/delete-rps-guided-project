import React from 'react';

export default function Header() {
  return (
    <div className="header-container">
      <div className="header-fighter">
        <div className="header-image-container">
          <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" />
        </div>
        <span>Computer</span>
      </div>

      <div className="header-fighter">
        <div className="header-image-container">
          <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" />
        </div>
        <span>User</span>
      </div>
    </div>
  );
}
