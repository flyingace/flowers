/* eslint-env jest */

import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { Header } from '../Header';

const initialProps = {};

const setup = (propOverrides) => {
  const props = Object.assign({}, initialProps, propOverrides);
  const Component = shallow(<Header {...props} />);

  return {
    props,
    Component,
  };
};

describe('Header', () => {
  //It renders
  it('renders without crashing', () => {
    const { props } = setup();
    shallow(<Header {...props} />);
  });

  //It matches its snapshot
  it('matches its existing snapshot', () => {
    const { props } = setup();
    const snapshot = renderer.create(<Header {...props} />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
