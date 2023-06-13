import { render, screen } from '@testing-library/react';
import Container from './Container';

describe('Container', () => {
  it('renders Container component', () => {
    render(<Container />);
    const componentElement = screen.getByText('Container');
    expect(componentElement).toBeInTheDocument();
  });
});
