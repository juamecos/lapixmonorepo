import React from 'react';
import { render } from '@testing-library/react-native';

import MainStackNavigator from './MainStackNavigator';

describe('MainStackNavigator', () => {
  it('should render successfully', () => {
    const { root } = render(<MainStackNavigator />);
    expect(root).toBeTruthy();
  });
});
