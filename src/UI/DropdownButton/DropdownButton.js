import React, { useRef, useEffect } from 'react';
import './DropdownButton.css';

const DropdownButton = ({ title, options }) => {
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleHover = () => {
      const dropdown = dropdownRef.current;
      const rect = dropdown.getBoundingClientRect();
      if (rect.right > window.innerWidth) {
        dropdown.style.left = 'auto';
        dropdown.style.right = '0';
      } else if (rect.left < 0) {
        dropdown.style.left = '0';
        dropdown.style.right = 'auto';
      }
    };

    const dropdownButton = dropdownRef.current.parentNode;
    dropdownButton.addEventListener('mouseover', handleHover);

    return () => {
      dropdownButton.removeEventListener('mouseover', handleHover);
    };
  }, []);

  return (
    <div className="dropdown-button">
      <button className="dropbtn">{title}</button>
      <div className="dropdown-content" ref={dropdownRef}>
        {options.map((option, index) => (
          <a key={index} href={option.href}>{option.label}</a>
        ))}
      </div>
    </div>
  );
};

export default DropdownButton;
