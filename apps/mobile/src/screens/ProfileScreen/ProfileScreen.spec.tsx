import React from 'react';
import { render } from '@testing-library/react-native';

import ProfileScreen from './ProfileScreen';  

describe('ProfileScreen', () => {
  it('should render successfully', () => {
    const { root } = render(<ProfileScreen />);
    expect(root).toBeTruthy();
  });
});
