import { render, screen } from '@testing-library/react';
import App from './App';

test('should renders the app', () => {
  render(<App />);
  const text = screen.getByText(/To do/i);
  expect(text).toBeInTheDocument();
});
