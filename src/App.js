import React from 'react';
import classes from './App.module.css';
import Header from './Header/Header';
import Banner from './BannerSection/BannerSection'
import UserArea from './UserSection/UserSection'


function App() {
  return (
     <div className='App'>
      <Header />
      <Banner />
      <div className={classes.UserDiv}>
        <UserArea /> 
      </div>
      </div>
    
  );
}

export default App;
