import { render, screen } from '@testing-library/react';
import MenuMobile from './MenuMobile';

describe('MenuMobile', () => {
  it('renders MenuMobile component', () => {
    render(<MenuMobile />);
    const componentElement = screen.getByText('MenuMobile');
    expect(componentElement).toBeInTheDocument();
  });
});
