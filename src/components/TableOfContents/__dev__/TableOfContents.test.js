/* eslint-env jest */

import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { TableOfContents } from '../TableOfContents';

const initialProps = {};

const setup = (propOverrides) => {
  const props = Object.assign({}, initialProps, propOverrides);
  const Component = shallow(<TableOfContents {...props} />);

  return {
    props,
    Component,
  };
};

describe('TableOfContents', () => {
  //It renders
  it('renders without crashing', () => {
    const { props } = setup();
    shallow(<TableOfContents {...props} />);
  });

  //It matches its snapshot
  it('matches its existing snapshot', () => {
    const { props } = setup();
    const snapshot = renderer.create(<TableOfContents {...props} />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
