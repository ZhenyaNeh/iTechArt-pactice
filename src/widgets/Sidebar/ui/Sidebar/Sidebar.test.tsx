import { render, screen } from '@testing-library/react';
import { Sidebar } from './Sidebar';

describe('Sidebar test', () => {
  test('Sidebar render', () => {
    render(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });
});
