import React, { useState } from 'react';
import './App.css';
import { Header } from './componentes/Header';
import Home from "./componentes/Home"
import Viewers from './componentes/Viewers';
import './styles/Header.css'
import './styles/Home.css'
import './styles/Viewers.css'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Detail from './componentes/Detail';


const App: React.FC =() => {


  return (
    <div className="App">

      <Router>
        <Header/>
        <Switch>
          <Route path="/detail">
            <Detail/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
          
      </Router>
    </div>
  );
}

export default App;
