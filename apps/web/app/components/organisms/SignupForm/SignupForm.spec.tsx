import { render, screen } from '@testing-library/react';
import SignupForm from './SignupForm';

describe('SignupForm', () => {
  it('renders SignupForm component', () => {
    render(<SignupForm />);
    const componentElement = screen.getByText('SignupForm');
    expect(componentElement).toBeInTheDocument();
  });
});
