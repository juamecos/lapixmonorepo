import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('Card', () => {
  it('renders Card component', () => {
    render(<Card />);
    const componentElement = screen.getByText('Card');
    expect(componentElement).toBeInTheDocument();
  });
});
