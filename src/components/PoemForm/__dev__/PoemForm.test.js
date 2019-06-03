/* eslint-env jest */

import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { PoemForm } from '../PoemForm';

const initialProps = {};

const setup = (propOverrides) => {
  const props = Object.assign({}, initialProps, propOverrides);
  const Component = shallow(<PoemForm {...props} />);

  return {
    props,
    Component,
  };
};

describe('PoemForm', () => {
  //It renders
  it('renders without crashing', () => {
    const { props } = setup();
    shallow(<PoemForm {...props} />);
  });

  //It matches its snapshot
  it('matches its existing snapshot', () => {
    const { props } = setup();
    const snapshot = renderer.create(<PoemForm {...props} />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
