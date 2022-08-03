import React from 'react';
import classes from './MainHeader.module.css';
import './MainHeader.module.css';
import resumeLogo from "./pokemon.png";

const MainHeader = (props) => {

  const searchHandler = (event) => {
    setTimeout(() => props.passData(event.target.value), 300);
   ;
  };

  return (
    <header className={classes['main-header']}>
      <nav className={classes.nav}>
        <ul>
          <a href="/" >
            <img src={resumeLogo} height='200px' alt="home button" />
          </a>

        </ul>
      </nav>
      <link href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet"></link>
      <div class="search-container">
        <input type="text" name="search" placeholder="Search..." class="search-input" onChange={searchHandler} />
        <a href="#" class="search-btn">
          <i class="fas fa-search"></i>
        </a>
      </div>


    </header>
  );
};

export default MainHeader;
