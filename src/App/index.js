import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import FlipCard from '../views/flipCardContainer';
import NavBar from '../components/NavBar';

class App extends React.Component {
  render() {
    return (
      <>
      <div className="App">
        <Router>
        <NavBar/>
        <FlipCard></FlipCard>
        </Router>
      </div>
      </>
    );
  }
}

export default App;
