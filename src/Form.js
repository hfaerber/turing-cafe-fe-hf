import React, {Component} from 'react';
import './Form.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      date: '',
      time: '',
      number: '',
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  clearInputs = () => {
    this.setState({
      name: '',
      date: '',
      time: '',
      number: '',
    })
  }

  handleClick = (event) => {
    event.preventDefault();
    const newRes = {
      name: this.state.name,
      date: this.state.date,
      time: this.state.time,
      number: Number(this.state.number),
    };
    this.clearInputs();
    this.props.addRes(newRes);
  }

  render () {
    return(
      <form>
        <input type='text' name='name' placeholder='Name'
          value={this.state.name} onChange={(event) => this.handleChange(event)}/>
        <input type='text' name='date' placeholder='Date (mm/dd)'
          value={this.state.date} onChange={(event) => this.handleChange(event)}/>
        <input type='text' name='time' placeholder='Time'
          value={this.state.time} onChange={(event) => this.handleChange(event)}/>
        <input type='number' name='number' placeholder='Number of guests'
          value={this.state.number} onChange={(event) => this.handleChange(event)}/>
        <button onClick={(event) => this.handleClick(event)}>Make Reservation</button>
      </form>
    )
  }
}

export default Form;
// {name: <String>, date: <String>, time: <String>, number: <Number>}
// New reservation: { id: 18939837, name: 'Leta', date: '12/3', time: '6:30', number: 2 }
