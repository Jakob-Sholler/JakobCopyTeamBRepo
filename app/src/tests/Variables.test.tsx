// src/Variables.test.tsx

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Variables from '../components/Variables';

describe('Variables Component', () => {
    beforeEach(() => {
        window.alert = jest.fn(); // Mock the alert function
    });

    test('renders the component correctly', () => {
        render(<Variables />);

        // Check if the main heading is in the document
        const headingElement = screen.getByText(/Understanding Variables in Python/i);
        expect(headingElement).toBeInTheDocument();

        // Check if the description is present
        const descriptionElement = screen.getByText(/In Python, a variable is a name that refers to a value./i);
        expect(descriptionElement).toBeInTheDocument();

        // Check for code snippets
        const codeElement1 = screen.getByText(/my_variable = 10/i);
        expect(codeElement1).toBeInTheDocument();

        const codeElement2 = screen.getByText(/name = "Alice"/i);
        expect(codeElement2).toBeInTheDocument();

        // Check for the Trinket iframe
        const iframeElement = screen.getByTitle(/Python Compiler/i);
        expect(iframeElement).toBeInTheDocument();

    });

    test('checks the Trinket URL is correct', () => {
        render(<Variables />);
        
        const iframeElement = screen.getByTitle(/Python Compiler/i);
        expect(iframeElement).toHaveAttribute('src', 'https://trinket.io/embed/python/c602fdf514fe');
    });
});
