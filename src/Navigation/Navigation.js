import React from 'react';
import classes from './Navigation.module.css';
 function Navigation({ title, isActive }) {
  return (
    <div>
      <p className={`${classes.Navbar} ${isActive ? classes.Active : null}`}> {title} </p>
    </div>
  );
}
export default Navigation;