/* eslint-env jest */

import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { Index } from '../Landing';

const initialProps = {};

const setup = (propOverrides) => {
  const props = Object.assign({}, initialProps, propOverrides);
  const Component = shallow(<Index {...props} />);

  return {
    props,
    Component,
  };
};

describe('Landing', () => {
  //It renders
  it('renders without crashing', () => {
    const { props } = setup();
    shallow(<Index {...props} />);
  });

  //It matches its snapshot
  it('matches its existing snapshot', () => {
    const { props } = setup();
    const snapshot = renderer.create(<Index {...props} />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
