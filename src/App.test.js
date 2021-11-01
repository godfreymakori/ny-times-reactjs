import { render, screen } from '@testing-library/react';
import App from './App';

test('renders NewYork Times Popular Articles link', () => {
  render(<App />);
  const linkElement = screen.getByText(/NewYork Times Popular Articles/i);
  expect(linkElement).toBeInTheDocument();
});
