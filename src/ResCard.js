import React from 'react'
import './ResCard.css'

const ResCard = ({ name, id, date, time, number, deleteRes }) => {
  return(
    <section className='cards'>
      <h2>{name}</h2>
      <p>{date}</p>
      <p>{time}</p>
      <p>Number of guests: {number}</p>
      <button onClick={() => deleteRes(id)}>Cancel</button>
    </section>
  )
}

export default ResCard
