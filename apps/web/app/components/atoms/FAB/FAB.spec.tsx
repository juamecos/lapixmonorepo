import { render, screen } from '@testing-library/react';
import FAB from './FAB';

describe('FAB', () => {
  it('renders FAB component', () => {
    render(<FAB />);
    const componentElement = screen.getByText('FAB');
    expect(componentElement).toBeInTheDocument();
  });
});
