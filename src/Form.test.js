import React from 'react'
import { shallow } from 'enzyme';
import Form from './Form';

describe('Form', () => {
  let wrapper;
  let mockAddRes = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<Form addRes={mockAddRes}/>)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should update state when handleChange is invoked', () => {
    const mockEvent = { target:{ name: 'name', value: 'Robbie' }}
    wrapper.instance().handleChange(mockEvent);
    expect(wrapper.state('name')).toEqual('Robbie')
  })

  it('should update state when clearInputs is invoked', () => {
    const expected = {
      name: '',
      date: '',
      time: '',
      number: '',
    };
    wrapper.instance().clearInputs();
    expect(wrapper.state()).toEqual(expected)
  })

  it('should invoke handleClick when clicked', () => {
    const mockEvent = { preventDefault: jest.fn() }
    wrapper.instance().handleClick = jest.fn()
    wrapper.find('button').simulate('click', mockEvent)
    expect(wrapper.instance().handleClick).toHaveBeenCalledWith(mockEvent)
  })

  it('should invoke addRes prop method when handleClick is invoked', () => {
    const mockState = {
      name: 'Robbie',
      date: '04/11',
      time: '7:45 pm',
      number: 2
    }
    const mockEvent = { preventDefault: jest.fn() };
    const mockNewRes = {
      name: 'Robbie',
      date: '04/11',
      time: '7:45 pm',
      number: 2
    };
    wrapper.instance().setState(mockState);
    wrapper.instance().handleClick(mockEvent);
    expect(mockAddRes).toHaveBeenCalledWith(mockNewRes);
  })

})
