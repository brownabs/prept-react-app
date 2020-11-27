import React, { Component } from 'react';
import goatData from '../../helpers/data/goatData';
import Goat from '../Goat';
import GoatForm from '../GoatForm';

class GoatCorral extends Component {
  state = { goats: [] };

  componentDidMount() {
    this.loadData();
  }

  loadData = () => {
    goatData.getGoats().then((response) => {
      this.setState({
        goats: response,
      });
    });
  }

  addUpdateGoat = (goatObj) => {
    if (goatObj.id === '') {
      goatData.addGoat(goatObj)
        .then((response) => {
          if (!response.error) {
            this.loadData();
          }
        });
    } else {
      goatData.updateGoat(goatObj)
        .then((response) => {
          if (!response.error) {
            this.loadData();
          }
        });
    }
  }

  removeGoat = (e) => {
    const removeGoat = this.state.goats.filter((goat) => goat.id !== e.target.id);
    this.setState({
      goats: removeGoat,
    });

    goatData.deleteGoat(e.target.id)
      .then(() => {
        this.loadData();
      });
  }

  render() {
    const { goats } = this.state;
    const renderGoatToDom = () => goats.map((goat) => <Goat key={goat.id} goat={goat} removeGoat={this.removeGoat} addUpdateGoat={this.addUpdateGoat}/>);

    return (
      // passing an empty prop goat={}, to be able to create form
      <>
      <GoatForm goat={''} addUpdateGoat={this.addUpdateGoat}/>
      <div className="goat-corral d-flex flex-wrap">
        {renderGoatToDom()}
      </div>
      </>);
  }
}

export default GoatCorral;
