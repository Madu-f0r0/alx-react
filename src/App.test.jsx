import React from 'react';
import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import App from "./App";

describe('App Component', () => {
    test('renders without crashing', () => {
        render(<App />);
    });

    test('renders a div with class App-header', () => {
        const { container } = render(<App />);
        const headerDiv = container.querySelector('.App-header');
        expect(headerDiv).toBeInTheDocument();
    });

    test('renders a div with the class App-body', () => {
        const { container } = render(<App />);
        const bodyDiv = container.querySelector('.App-body');
        expect(bodyDiv).toBeInTheDocument();
    });

    test('renders a div with the class App-footer', () => {
        const { container } = render(<App />);
        const footerDiv = container.querySelector('.App-footer');
        expect(footerDiv).toBeInTheDocument();
    });
}); 