import * as React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App.component';

describe('Page renders', () =>{
    test('Should render the user image', () => {
        render(<App />);
        const userimage = screen.getByAltText(/...image/);
        expect(userimage).toBeInTheDocument();
    });

    test('Should render the search input', () => {
        render(<App />);
        const userimage = screen.getByPlaceholderText(/Search../);
        expect(userimage).toBeInTheDocument();
    });
})
