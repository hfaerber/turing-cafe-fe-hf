export const getReservations = () => {
  return fetch('http://localhost:3001/api/v1/reservations')
    .then(res => {
      if (!res.ok) {
        throw Error('Something went wrong')
      }
      return res.json();
    })
}
