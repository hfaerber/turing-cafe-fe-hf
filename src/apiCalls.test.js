import {getReservations, postReservation, deleteReservation} from './apiCalls.js'

describe('getReservations', () => {
  let mockReturnedReservations = [
    { id: 1111111,
      name: 'Robbie',
      date: '04/11',
      time: '7:45 pm',
      number: 2 },
    { id: 2222222,
      name: 'Eric',
      date: '04/22',
      time: '8:45 pm',
      number: 3 }
  ];

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockReturnedReservations)
      });
    });
  });

  it('should call fetch with the correct URL', () => {
    getReservations();
    expect(window.fetch).toHaveBeenCalledWith('http://localhost:3001/api/v1/reservations');
  })

  it('should return an array of reservations', () => {
    expect(getReservations()).resolves.toEqual(mockReturnedReservations);
  })

  it('should return an error if fetch fails', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false,
      });
    });
    expect(getReservations()).rejects.toEqual(Error('Something went wrong'));
  })

})

describe('postReservation', () => {
  let mockNewRes =
  { name: 'Eric',
    date: '04/22',
    time: '8:45 pm',
    number: 3 };
  let mockReturnedNewReservation =
    { id: 2222222,
      name: 'Eric',
      date: '04/22',
      time: '8:45 pm',
      number: 3 };
  let mockOptions = {
    method: "POST",
    body: JSON.stringify(mockNewRes),
    headers: { "Content-Type": "application/json" },
  }

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockReturnedNewReservation)
      });
    });
  });

  it('should call fetch with the correct URL', () => {
    postReservation(mockOptions);
    expect(window.fetch).toHaveBeenCalledWith('http://localhost:3001/api/v1/reservations', mockOptions);
  })

  it('should return the posted new reservation', () => {
    expect(postReservation()).resolves.toEqual(mockReturnedNewReservation);
  })

  it('should return an error if fetch fails', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false,
      });
    });
    expect(postReservation()).rejects.toEqual(Error('Something went wrong'));
  })

})
