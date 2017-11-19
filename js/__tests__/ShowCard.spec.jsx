import React from 'react';
import { shallow } from 'enzyme';
import ShowCard from '../ShowCard';

test('ShowCard renders correctly', () => {
  const component = shallow(<ShowCard />);
  expect(component).toMatchSnapshot();
});
