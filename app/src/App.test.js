// src/App.test.js
import React from 'react'; // Add this import
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders welcome message', () => {
  render(<App />);
  const welcomeElement = screen.getByText(/welcome to the app/i); // Adjusting to the actual text
  expect(welcomeElement).toBeInTheDocument();
});
