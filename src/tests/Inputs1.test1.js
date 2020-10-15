import React from 'react';
import renderer from 'react-test-renderer';
// import ReactTestUtils from 'react-dom/test-utils'; // ES6
import Inputs1 from '../components/Inputs1';

test('renders learn react link', () => {
  const component = renderer.create(<Inputs1 />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
