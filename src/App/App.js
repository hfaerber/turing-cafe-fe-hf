import React, { Component } from 'react';
import './App.css';
import ResBox from '../ResBox'
import Form from '../Form'
import {getReservations, postReservation, deleteReservation} from '../apiCalls.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: []
    }
  }

  componentDidMount() {
    getReservations()
      .then(data => this.setState({ reservations: data }))
      .catch(error => console.log(error))
  }

  addRes = (newRes) => {
    const options = {
      method: "POST",
      body: JSON.stringify(newRes),
      headers: { "Content-Type": "application/json" },
    }

    postReservation(options)
      .then(data => {
        this.setState({ reservations: [...this.state.reservations, data ] })
      })
      .catch(err => console.log(err))
  }

  deleteRes = (id) => {
    const options = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }

    deleteReservation(id, options)
      .then(data => {
        this.setState({ reservations: data })
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form
            addRes={this.addRes}
          />
        </div>
          <ResBox
            reservations={this.state.reservations}
            deleteRes={this.deleteRes}
          />
      </div>
    )
  }
}

export default App;
