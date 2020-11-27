import React, { Component } from 'react';
import { Button, Form, Input } from 'reactstrap';

class GoatForm extends Component {
  state = {
    id: this.props.goat.id || '',
    age: this.props.goat.age || '',
    name: this.props.goat.name || '',
    description: this.props.goat.description || '',
    imgUrl: this.props.goat.imgUrl || '',
    isBusy: this.props.goat.isBusy || false,
  }

  handleChange = (e) => {
    // terinary to make sure that age's value is a number
    const value = e.target.name === 'age' ? Number(e.target.value) : e.target.value;
    this.setState({
      [e.target.name]: value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addUpdateGoat(this.state);
  }

  render() {
    const dataItems = Object.keys(this.state);
    return (
      <Form className="container mb-3" onSubmit={this.handleSubmit}>
       { dataItems.map((item) => (
         item !== 'id' && item !== 'isBusy' && (
         <Input className="m-2" type="text"
         key={item}
         name={item}
         id={item}
         placeholder={`Enter goat ${item}`}
         value={this.state[`${item}`]}
         onChange={this.handleChange}
         required
         >
         </Input>
         )
       ))
      }
       <Button className="mt-3">Submit</Button>
      </Form>
    );
  }
}

export default GoatForm;
