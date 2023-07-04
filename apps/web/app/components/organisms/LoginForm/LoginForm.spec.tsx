import { render, screen } from '@testing-library/react';
import LoginForm from './LoginForm';

describe('LoginForm', () => {
  it('renders LoginForm component', () => {
    render(<LoginForm />);
    const componentElement = screen.getByText('LoginForm');
    expect(componentElement).toBeInTheDocument();
  });
});
