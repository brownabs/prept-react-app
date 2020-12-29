import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Routes from '../helpers/Routes';

class App extends React.Component {
  // we have our class App component already built
  // now create our React Router, which is going to be our collection of navigational components
  // lets start with NavBar
  // I've already created a NavBar functional component, that we'll put in the Router
  // let's create a Routes functional component - go into helpers directory and create a Routes.js file
  render() {
    return (
      <>
      <div className="App">
        <Router>
        <NavBar/>
        <Routes/>
        </Router>
      </div>
      </>
    );
  }
}

export default App;
