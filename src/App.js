import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import Header from './components/MainHeader';
import MainPage from './components/MainPage';
import DetailsPage from './components/DetailsPage';

const App = () => {

  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path='/' component={MainPage} />
        <Route path='/DetailsPage/:pokemonID' >
          <DetailsPage/> </Route>
      </Switch>
    </Router>
  );
}

export default App;
