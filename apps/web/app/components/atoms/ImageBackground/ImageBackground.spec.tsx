import { render, screen } from '@testing-library/react';
import ImageBackground from './ImageBackground';

describe('ImageBackground', () => {
  it('renders ImageBackground component', () => {
    render(<ImageBackground />);
    const componentElement = screen.getByText('ImageBackground');
    expect(componentElement).toBeInTheDocument();
  });
});
