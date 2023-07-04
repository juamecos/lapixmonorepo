import { render, screen } from '@testing-library/react';
import ResetForm from './ResetForm';

describe('ResetForm', () => {
  it('renders ResetForm component', () => {
    render(<ResetForm />);
    const componentElement = screen.getByText('ResetForm');
    expect(componentElement).toBeInTheDocument();
  });
});
