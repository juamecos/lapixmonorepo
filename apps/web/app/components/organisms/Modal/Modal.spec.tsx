import { render, screen } from '@testing-library/react';
import Modal from './Modal';

describe('Modal', () => {
  it('renders Modal component', () => {
    render(<Modal />);
    const componentElement = screen.getByText('Modal');
    expect(componentElement).toBeInTheDocument();
  });
});
