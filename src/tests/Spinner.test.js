import React from 'react';
import renderer from 'react-test-renderer';
// import ReactTestUtils from 'react-dom/test-utils'; // ES6
import Spinner from '../components/Spinner';

test('renders learn react link', () => {
  const component = renderer.create(<Spinner />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
