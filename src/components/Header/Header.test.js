import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header tests', () => {
    it('should render Header component', () => {
        render(<Header />);
        expect(screen.getByText(/todo app/i)).toBeInTheDocument();
        expect(screen.getByText(/react/i)).toBeInTheDocument();
        expect(screen.getByText(/redux/i)).toBeInTheDocument();
    });
});
