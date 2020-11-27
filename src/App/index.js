import React from 'react';
import GoatCorral from '../components/GoatCorral';
import './App.scss';
import goatData from '../helpers/data/goatData';

class App extends React.Component {
  state = {
    goats: [],
  }

  componentDidMount() {
    goatData.getGoats().then((response) => {
      this.setState({
        goats: response,
      });
    });
  }

  render() {
    return (
      <div className="App">
        <h1 className="site-header">Goat Yoga</h1>
        < GoatCorral />
      </div>
    );
  }
}

export default App;
