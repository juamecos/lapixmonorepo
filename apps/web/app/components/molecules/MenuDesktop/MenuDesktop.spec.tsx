import { render, screen } from '@testing-library/react';
import MenuDesktop from './MenuDesktop';

describe('MenuDesktop', () => {
  it('renders MenuDesktop component', () => {
    render(<MenuDesktop />);
    const componentElement = screen.getByText('MenuDesktop');
    expect(componentElement).toBeInTheDocument();
  });
});
