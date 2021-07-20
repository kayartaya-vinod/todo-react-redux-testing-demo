import { render } from '@testing-library/react';
import App from './App';

describe('App tests', () => {
    it('should render App component', () => {
        const { getByText } = render(<App />);
        expect(getByText(/todo app/i)).toBeInTheDocument();
        expect(getByText('Powered with React and Redux')).toBeInTheDocument();
        expect(getByText('Add redux reducer')).toBeInTheDocument();
        expect(getByText('Things to do today...')).toBeInTheDocument();
    });
});
