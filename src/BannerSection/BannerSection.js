import React from 'react';
import classes from './BannerSection.module.css';
import ArrowUp from '../assets/arrow-up.png';
import ArrowDown from '../assets/arrow-down.png';
import BannerImg from '../assets/landing-section-image.png';
function Banner() {
  return (
    <div className={classes.BannerPart}>
      <div className={classes.BannerLeft}>
        <h1 className={classes.BannerHead}>
          Stunning Workplace<div className={classes.Title}></div>
        </h1>
        <p className={classes.Desc}>
          With Stunning, remote teams can organize projects, manage shifting
          priorities, and get work done.
        </p>
        <div className={classes.BtnWrapper}>
          <p className={classes.AccountBtn}>New Account</p>
          <img className={classes.ArrowUp} src={ArrowUp} alt='Arrow-up' />
          <img className={classes.ArrowDown} src={ArrowDown} alt='Arrow-down' />
        </div>
      </div>
      <div className={classes.BannerRight}>
        <img
          className={classes.BannerImg}
          src={BannerImg}
          alt='landing-section'
        />
      </div>
    </div>
  );
}
export default Banner;