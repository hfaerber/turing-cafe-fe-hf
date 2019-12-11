import React from 'react';
import './ResBox.css'
import ResCard from './ResCard'

const ResBox = ({ reservations, deleteRes }) => {
  let cards = reservations.map(reservation => {
    return (<ResCard
      key={reservation.id}
      id={reservation.id}
      name={reservation.name}
      date={reservation.date}
      time={reservation.time}
      number={reservation.number}
      deleteRes={deleteRes}
    />)
  })

  return(
    <div className='resy-container'>{cards}</div>
  )
}

export default ResBox
