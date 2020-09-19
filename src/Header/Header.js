import React from 'react';
import Logo from '../assets/stunning-logo.png';
import classes from './Header.module.css';
import Navigation from '../Navigation/Navigation';
function Header() {
  const arr = [
    {
      id: 1,
      title: 'Home',
      status: true,
    },
    {
      id: 2,
      title: 'About',
      status: false,
    },
    {
      id: 3,
      title: 'Blog',
      status: false,
    },
    {
      id: 4,
      title: 'Jobs',
      status: false,
    },
  ];

  return (
    <div className={classes.HeaderWrap}>
      <img className={classes.Logo} src={Logo} alt='stunning-logo' />
      <div className={classes.Nav}>
        {arr.map((item) => {
          return (
            <Navigation
              className={classes.Navigation}
              key={item.id}
              title={item.title}
              isActive={item.status}
            />
          );
        })}
      </div>
      <p className={classes.AccountBtn}>Your Account</p>
      <div className={classes.Icon}>
        <div className={classes.Dashes}></div>
        <div className={classes.Dashes}></div>
        <div className={classes.Dashes}></div>
      </div>
    </div>
  );
}
export default Header;