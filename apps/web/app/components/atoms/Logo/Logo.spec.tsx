import { render, screen } from '@testing-library/react';
import Logo from './Logo';

describe('Logo', () => {
  it('renders Logo component', () => {
    render(<Logo />);
    const componentElement = screen.getByText('Logo');
    expect(componentElement).toBeInTheDocument();
  });
});
