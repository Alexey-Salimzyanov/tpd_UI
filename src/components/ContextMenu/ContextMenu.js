import React from 'react';
import './ContextMenu.css';

const ContextMenu = ({ actions, position, onClose }) => {
  return (
    <div className="context-menu" style={{ top: position.y, left: position.x }}>
      <ul>
        {actions.map((action, index) => (
          <li key={index} onClick={() => { action.onClick(); onClose(); }}>
            {action.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContextMenu;
