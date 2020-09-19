import React from 'react';
import classes from './User.module.css';
import grayTick from '../assets/tick-gray.png';
import blueTick from '../assets/tick-blue.png';
import blueUser from '../assets/user-blue.png';
import orangeUser from '../assets/user-orange.png';
import pinkUser from '../assets/user-pink.png';
import redUser from '../assets/user-red.png';
 function User({ id, title, isActive, date }) {
  let profile = orangeUser;

  switch (id) {
    case 1:
      profile = pinkUser;

      break;
    case 2:
      profile = orangeUser;

      break;
    case 3:
      profile = blueUser;

      break;
    case 4:
      profile = redUser;
      break;
    default:
      profile = redUser;
      break;
  }
  return (
    <div className={`${classes.UserWrapper} ${isActive ? classes.Active : null}`}>
      <img
        className={classes.ProfileImg}
        src={isActive ? blueTick : grayTick}
        alt='tick'
      />
      <p className={classes.UserName}>{title}</p>
      <img className={classes.UserImg} src={profile} alt='user' />
      <p>{date}</p>
      <div
        className={`${classes.ColorDiv} ${(function () {
          switch (id) {
            case 1:
              return classes.pink;
            case 2:
              return classes.red;
            case 3:
              return classes.green;
            case 4:
              return classes.yellow;
            default:
              return classes.yellow;
          }
        })()}`}
      ></div>
    </div>
  );
}
export default User;