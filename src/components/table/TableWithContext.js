import React, { useState } from 'react';
import ContextMenu from '../ContextMenu/ContextMenu';
import './Table.css';

const TableWithContextMenu = ({ data, actions = {} }) => {
  const [contextMenu, setContextMenu] = useState(null);

  const handleRightClick = (event, cellData) => {
    if (actions[cellData.key]) {
      event.preventDefault();
      setContextMenu({
        position: { x: event.clientX, y: event.clientY },
        actions: actions[cellData.key]
      });
    }
  };

  const handleCloseContextMenu = () => {
    setContextMenu(null);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Название</th>
            <th>Описание</th>
            <th>Цена</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td onContextMenu={(e) => handleRightClick(e, { key: 'name', data: item })}>{item.name}</td>
              <td onContextMenu={(e) => handleRightClick(e, { key: 'description', data: item })}>{item.description}</td>
              <td onContextMenu={(e) => handleRightClick(e, { key: 'price', data: item })}>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {contextMenu && (
        <ContextMenu
          actions={contextMenu.actions}
          position={contextMenu.position}
          onClose={handleCloseContextMenu}
        />
      )}
    </div>
  );
};

export default TableWithContextMenu;
