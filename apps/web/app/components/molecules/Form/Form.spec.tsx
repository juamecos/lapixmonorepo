import { render, screen } from '@testing-library/react';
import Form from './Form';

describe('Form', () => {
  it('renders Form component', () => {
    render(<Form />);
    const componentElement = screen.getByText('Form');
    expect(componentElement).toBeInTheDocument();
  });
});
