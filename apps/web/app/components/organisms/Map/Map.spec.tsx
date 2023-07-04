import { render, screen } from '@testing-library/react';
import Map from './Map';

describe('Map', () => {
  it('renders Map component', () => {
    render(<Map />);
    const componentElement = screen.getByText('Map');
    expect(componentElement).toBeInTheDocument();
  });
});
