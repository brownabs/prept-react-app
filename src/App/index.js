import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Routes from '../helpers/Routes';

class App extends React.Component {
  render() {
    return (
      <>
      <div className="App">
        <Router>
<<<<<<< HEAD
        <NavBar/>
        <Routes/>
=======
          <NavBar/>
          <Routes/>
>>>>>>> c30ee86fdea1bacb5175ccfa435412c13e95598c
        </Router>
      </div>
      </>
    );
  }
}

export default App;
