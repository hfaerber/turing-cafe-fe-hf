import React from 'react'
import { shallow } from 'enzyme';
import ResBox from './ResBox';

describe('ResBox', () => {

  it('should match snapshot with all data passed through correctly', () => {
    const wrapper = shallow(<ResBox
        reservations={[{
          id: 11,
          name: 'Robbie',
          date: '04/11',
          time: '7:45 pm',
          number: 2 }]}
        deleteRes={jest.fn()}
      />)
    expect(wrapper).toMatchSnapshot();
  })
})
