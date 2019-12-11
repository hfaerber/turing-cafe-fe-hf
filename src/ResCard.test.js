import React from 'react'
import { shallow } from 'enzyme';
import ResCard from './ResCard';

  describe('ResCard', () => {

    it('should match snapshot with all data passed through correctly', () => {
      const wrapper = shallow(<ResCard
          key={11}
          id={11}
          name='Robbie'
          date='04/11'
          time='7:45 pm'
          number={2}
          deleteRes={jest.fn()}
        />)
      expect(wrapper).toMatchSnapshot();
    })


})
