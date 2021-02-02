//component to link different views

import React, { Component } from 'react';
import Home from './Home';
import Profile from './Profile';
import Myreservations from './Myreservations';
import ReservationDetails from './ReservationDetails';
import Header from './Header';
import Footer from './Footer';
import { Switch, Route, Redirect } from 'react-router-dom';
import '../App.css';
import '../index.css';


class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        
    };
  }


  render() {
    const HomePage = () => {
        return(
            <Home className = 'Content'
            />
        );
      }

    return (
      <div>
        <div>
        <Header className = 'Header'/>
        </div>
        <div>
        <Switch>
              <Route path='/Home' component={HomePage} />
              <Route exact path='/Myreservations' component={Myreservations} />
              <Route exact path='/ReservationDetails' component={ReservationDetails} />
              <Route exact path='/Profile' component={Profile} />
              <Redirect to="/Home" />
          </Switch>
          </div>
          <div>
        <Footer className = 'Footer' />
        </div>
      </div>
    );
  }
}

export default Main;