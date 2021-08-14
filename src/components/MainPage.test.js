import React from 'react';
import { Provider } from 'react-redux';
import { shallow,mount } from 'enzyme';
import MainPage from './MainPage';
import "@testing-library/jest-dom/extend-expect";
import { create } from "react-test-renderer"

let wrapper;

beforeEach(() => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robotsReducer: [],
    searchField: '',
    isPending: false
  }
  wrapper = shallow(<MainPage {...mockProps}/>)
 })

it('renders without crashing', () => {
  expect(create(wrapper).toJSON()).toMatchSnapshot();
});

it('fileters Robots', () => {

  const mockProps = {
    onRequestRobots: jest.fn(),
    robotsReducer: [{
          id: 1,
          name: 'Leanne Graham',
          username: 'Bret',
          email: 'Sincere@april.biz'
        }],
    searchField: 'a',
    isPending: false
  }

  const wrapper1 = shallow(<MainPage {...mockProps}/>)
  const instance = wrapper1.props()
  const i = instance.children.props.children[2].props.children[1].props.robotsPassed
  expect(i.length).toEqual(1)
  // expect(wrapper1.exists()).toEqual(1)
  
  // expect(wrapper.invoke('robotsPassed')).toEqual([]);

});

it('fileters Robots correctly', () => {
  const filteredRobots = [{
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz'
  }]
  const mockProps = {
    onRequestRobots: jest.fn(),
    robotsReducer: [{
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz'
    }],
    searchField: 'Leanne',
    isPending: false
  }
  const wrapper2 = shallow(<MainPage {...mockProps}/>)
  const instance = wrapper2.props()
  const i = instance.children.props.children[2].props.children[1].props.robotsPassed
  expect(i).toEqual(filteredRobots)
});

it('fileters Robots correctly 2', () => {
  const filteredRobots = [{
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz'
  }]
  const mockProps = {
    onRequestRobots: jest.fn(),
    robotsReducer: [{
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz'
    }],
    searchField: 'Xavier',
    isPending: false
  }
  wrapper = shallow(<MainPage {...mockProps}/>)
  const instance = wrapper.props()
  const i = instance.children.props.children[2].props.children[1].props.robotsPassed
  expect(i).toEqual([]);
});