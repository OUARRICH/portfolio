import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { MediaQueryProvider } from 'react-media-query-hoc';

import Menu from './menu';
import Experiences from './experiences';
import Home from './home';

import './App.css';

const App = () => {
  const [open, setOpen] = useState(false);
  const [selectedMenuItem, setSeletctedMenuItem] = useState('HOME');

  const toogleSideBar = () => {
    setOpen(!open);
  };

  const onClickMenuItem = (item) => {
    setSeletctedMenuItem(item.value);
    toogleSideBar();
  } 

  return (
    <MediaQueryProvider>
      <div className="App">
        <Router>
          <Menu onClickMenuItem={onClickMenuItem} open={open} selectedMenuItem={selectedMenuItem} />
          <div>
            <button className="App__barsIcon" onClick={toogleSideBar}>
              {!open && <i className="fas fa-bars"></i>}
              {open && <i className="fas fa-times"></i>}
            </button>
            <div className="App__Content">
              <Switch>
                <Route path="/experiences">
                  <Experiences />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    </MediaQueryProvider>
  );
}

export default App;
