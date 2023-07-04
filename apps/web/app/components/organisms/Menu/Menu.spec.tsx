import { render, screen } from '@testing-library/react';
import Menu from './Menu';

describe('Menu', () => {
  it('renders Menu component', () => {
    render(<Menu />);
    const componentElement = screen.getByText('Menu');
    expect(componentElement).toBeInTheDocument();
  });
});
