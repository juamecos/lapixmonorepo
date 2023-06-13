import { render, screen } from '@testing-library/react';
import Skeleton from './Skeleton';

describe('Skeleton', () => {
  it('renders Skeleton component', () => {
    render(<Skeleton />);
    const componentElement = screen.getByText('Skeleton');
    expect(componentElement).toBeInTheDocument();
  });
});
