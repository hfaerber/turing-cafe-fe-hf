import React from 'react';
import './ResBox.css'
import ResCard from './ResCard'

const ResBox = ({ reservations }) => {
  // map over reservations and create a ResCard for each
  let cards = reservations.map(reservation => {
    return (<ResCard
      key={reservation.id}
      id={reservation.id}
      name={reservation.name}
      date={reservation.date}
      time={reservation.time}
      number={reservation.number}
    />)
  })

  return(
    <div>{cards}</div>
  )
}

export default ResBox


// { id: 18907224, name: 'Christie', date: '8/8', time: '7:00', number: 3 }
