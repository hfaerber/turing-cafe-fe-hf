import React from 'react'
import { shallow } from 'enzyme';
import Form from './Form';

describe('Form', () => {


  it('should match the snapshot', () => {
    const wrapper = shallow(<Form addRes={jest.fn()}/>)
    expect(wrapper).toMatchSnapshot();
  })

  it('should update state when handleChange is called', () => {
    const wrapper = shallow(<Form addRes={jest.fn()}/>)
    const mockEvent = { target:{ name: 'name', value: 'Robbie' }}

    wrapper.instance().handleChange(mockEvent);

    expect(wrapper.state('name')).toEqual('Robbie')
  })

  it('should invoke handleClick when clicked', () => {
    const wrapper = shallow(<Form addRes={jest.fn()}/>)
    const mockEvent = { preventDefault: jest.fn() }

    wrapper.instance().handleClick = jest.fn()

    wrapper.find('button').simulate('click', mockEvent)

    expect(wrapper.instance().handleClick).toHaveBeenCalledWith(mockEvent)
  })


})
