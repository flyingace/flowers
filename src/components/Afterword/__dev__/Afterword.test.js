/* eslint-env jest */

import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { Afterword } from '../Afterword';

const initialProps = {};

const setup = (propOverrides) => {
  const props = Object.assign({}, initialProps, propOverrides);
  const Component = shallow(<Afterword {...props} />);

  return {
    props,
    Component,
  };
};

describe('Afterword', () => {
  //It renders
  it('renders without crashing', () => {
    const { props } = setup();
    shallow(<Afterword {...props} />);
  });

  //It matches its snapshot
  it('matches its existing snapshot', () => {
    const { props } = setup();
    const snapshot = renderer.create(<Afterword {...props} />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
