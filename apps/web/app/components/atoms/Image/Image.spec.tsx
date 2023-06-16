import { render, screen } from '@testing-library/react';
import Image from './Image';

describe('Image', () => {
  it('renders Image component', () => {
    render(<Image />);
    const componentElement = screen.getByText('Image');
    expect(componentElement).toBeInTheDocument();
  });
});
