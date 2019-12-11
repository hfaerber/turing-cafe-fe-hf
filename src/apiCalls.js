export const getReservations = () => {
  return fetch('http://localhost:3001/api/v1/reservations')
    .then(res => {
      if (!res.ok) {
        throw Error('Something went wrong')
      }
      return res.json();
    })
}

export const postReservation = (options) => {
  return fetch('http://localhost:3001/api/v1/reservations', options)
    .then(res => {
      if (!res.ok) {
        throw Error('Something went wrong')
      }
      return res.json();
    })
}

export const deleteReservation = (id, options) => {
  return fetch(`http://localhost:3001/api/v1/reservations/${id}`, options)
    .then(res => {
      if (!res.ok) {
        throw Error('Something went wrong')
      }
      return res.json();
    })
}
