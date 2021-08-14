import React from 'react';
import "@testing-library/jest-dom/extend-expect";
import { create } from "react-test-renderer"
import {shallow} from 'enzyme'
import Button from './Button'






  it('should set the count value on click', () => {
    
    const wrapper = shallow(<Button/>)
    
    wrapper.find('[id="counter"]').simulate('click');
    wrapper.find('[id="counter"]').simulate('click');
    wrapper.find('[id="counter"]').simulate('click');

    expect((wrapper.find('p').text())).toEqual('3')
    expect(create(wrapper).toJSON()).toMatchSnapshot();
    // expect(create(wrapper.find('[id="counter"]')).toJSON()).toEqual('counter')
    
  });

  
//   it('Counter: renders correctly', () => {
//      const app = create(<Button />);
//       expect(app.toJSON()).toMatchSnapshot()
//     });



  