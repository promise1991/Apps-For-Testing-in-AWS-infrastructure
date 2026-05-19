import { render, screen } from '@testing-library/react';
import App from './App';

// ================================================================
// TEST 1: Navbar renders correctly
// Why: Navbar is on every page — if it breaks, 
//      the whole app looks broken to users
// ================================================================
test('renders navbar with correct title', () => {
  render(<App />);
  // Check "IMS" title appears in navbar
  const navTitle = screen.getByText(/IMS/i);
  expect(navTitle).toBeInTheDocument();
});

// ================================================================
// TEST 2: About link renders in navbar
// Why: Navigation links must always be present
//      If missing, users can't navigate the app
// ================================================================
test('renders navbar with About link', () => {
  render(<App />);
  const aboutLink = screen.getByText(/About/i);
  expect(aboutLink).toBeInTheDocument();
});

// ================================================================
// TEST 3: App renders without crashing
// Why: Most basic test — confirms the entire
//      app component mounts without errors
// ================================================================
test('app renders without crashing', () => {
  // If this throws an error, the test fails
  const { container } = render(<App />);
  expect(container).toBeTruthy();
});
