/* eslint-env jest */

import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { Bio } from '../Bio';

const initialProps = {};

const setup = (propOverrides) => {
  const props = Object.assign({}, initialProps, propOverrides);
  const Component = shallow(<Bio {...props} />);

  return {
    props,
    Component,
  };
};

describe('Bio', () => {
  //It renders
  it('renders without crashing', () => {
    const { props } = setup();
    shallow(<Bio {...props} />);
  });

  //It matches its snapshot
  it('matches its existing snapshot', () => {
    const { props } = setup();
    const snapshot = renderer.create(<Bio {...props} />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
