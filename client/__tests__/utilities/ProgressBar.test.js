import {shallow} from 'enzyme';
import React from 'react';
import ProgressBar from '../../src/utilities/ProgressBar';

describe('ProgressBar', () => {
  it('ProgressBar should render correctly', () => {
    const component = shallow(<ProgressBar />);
    expect(component.exists()).toBe(true);
    expect(component).toMatchSnapshot();
  });
});
