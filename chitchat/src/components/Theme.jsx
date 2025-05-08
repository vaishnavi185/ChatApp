import React, { useState } from 'react';

export default function Theme() {
  const [theme, setTheme] = useState('light'); // Default theme is light

  const handleThemeChange = (event) => {
    const selectedTheme = event.target.value;
    setTheme(selectedTheme);

    // Apply the theme to the body
    document.body.style.backgroundColor = selectedTheme === 'dark' ? '#333' : '#fff';
    document.body.style.color = selectedTheme === 'dark' ? '#fff' : '#000';
  };

  return (
    <div>
      <h2>Choose Theme</h2>
      <div>
        <label>
          <input
            type="radio"
            value="light"
            checked={theme === 'light'}
            onChange={handleThemeChange}
          />
          Light
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            value="dark"
            checked={theme === 'dark'}
            onChange={handleThemeChange}
          />
          Dark
        </label>
      </div>
    </div>
  );
}