import React, { Component } from 'react';
import Header from './Header';
import HorScroll from './HorScroll';
import Sidebar from './Sidebar';
import Videos from './Videos';
import { BrowserRouter as Router, Switch , Route} from "react-router-dom";
class App extends Component {
  
  render() {  
    return (
      <div className="app">
        <Router>
          <Switch>
          <Route path="/search/:searchitem">
              <h1>Search page</h1>
            </Route>
            <Route path="/">
              <div className='flex-col'>
              <Header />
              <HorScroll />
              </div>
              <Sidebar />
              <Videos />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
export default App;
