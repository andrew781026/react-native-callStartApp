import React from 'react';
import Intro from '../Intro';

import renderer from 'react-test-renderer';

test('snapshot test', () => {
    const tree = renderer.create(<Intro />).toJSON();
    expect(tree).toMatchSnapshot();
});
