/* eslint-env jest */

import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { Page } from '../Page';

const initialProps = {};

const setup = (propOverrides) => {
  const props = Object.assign({}, initialProps, propOverrides);
  const Component = shallow(<Page {...props} />);

  return {
    props,
    Component,
  };
};

describe('Page', () => {
  //It renders
  it('renders without crashing', () => {
    const { props } = setup();
    shallow(<Page {...props} />);
  });

  //It matches its snapshot
  it('matches its existing snapshot', () => {
    const { props } = setup();
    const snapshot = renderer.create(<Page {...props} />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
