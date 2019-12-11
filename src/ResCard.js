import React from 'react'
import './ResCard.css'

const ResCard = ({ name, id, date, time, number }) => {
  return(
    <section className='cards'>
      <h2>{name}</h2>
      <p>{date}</p>
      <p>{time}</p>
      <p>Number of guests: {number}</p>
      <button>Cancel</button>
    </section>
  )
}

export default ResCard

// { id: 18907224, name: 'Christie', date: '8/8', time: '7:00', number: 3 }
