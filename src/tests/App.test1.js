import React from 'react'
import { shallow } from 'enzyme'
// import toJson from 'enzyme-to-json'
import  App  from '../App'
// import  App  from '../App.css'
    

    // const App = () => <div className="app-container" />;


describe('App', () => {
  it('should render Header component', () => {
    
    const wrapper = shallow(<App />)
    expect(wrapper.find('div').length).toEqual(2)
  })


  // it('should render the Calculator Component', () => {
  //   expect(wrapper.containsMatchingElement(<Header />)).toEqual(true);
  // });
})