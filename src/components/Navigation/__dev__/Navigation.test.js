/* eslint-env jest */

import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { Navigation } from '../Navigation';

const initialProps = {};

const setup = (propOverrides) => {
  const props = Object.assign({}, initialProps, propOverrides);
  const Component = shallow(<Navigation {...props} />);

  return {
    props,
    Component,
  };
};

describe('Navigation', () => {
  //It renders
  it('renders without crashing', () => {
    const { props } = setup();
    shallow(<Navigation {...props} />);
  });

  //It matches its snapshot
  it('matches its existing snapshot', () => {
    const { props } = setup();
    const snapshot = renderer.create(<Navigation {...props} />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
