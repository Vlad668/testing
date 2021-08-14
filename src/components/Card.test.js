// import React from 'react'
// import { shallow,configure } from 'enzyme';
import Card from './Card'
// import '@testing-library/jest-dom';
// import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { create } from "react-test-renderer"
import {shallow} from 'enzyme';


// configure({ adapter: new Adapter() });

const app = create(<Card />);

it('name of test', () => {
    expect(shallow(<Card/>).length).toEqual(1)
})

it('snapwatch test', () => {
    expect(app.toJSON()).toMatchSnapshot()
})

