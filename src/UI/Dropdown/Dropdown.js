import React from 'react';
import classes from './Dropdown.module.css';

const Dropdown = ({ children, ...props }) => {
  return (
    <div className={classes['dropdown']}>
      <select {...props}>
        {children}
      </select>
    </div>
  );
};

export default Dropdown;
