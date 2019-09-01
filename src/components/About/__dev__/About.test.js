/* eslint-env jest */

import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { About } from '../About';

const initialProps = {};

const setup = (propOverrides) => {
  const props = Object.assign({}, initialProps, propOverrides);
  const Component = shallow(<About {...props} />);

  return {
    props,
    Component,
  };
};

describe('About', () => {
  //It renders
  it('renders without crashing', () => {
    const { props } = setup();
    shallow(<About {...props} />);
  });

  //It matches its snapshot
  it('matches its existing snapshot', () => {
    const { props } = setup();
    const snapshot = renderer.create(<About {...props} />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
