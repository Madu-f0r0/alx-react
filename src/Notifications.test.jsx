import React from 'react';
import { getByText, render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import Notifications from './Notifications';

describe('Notifications', () => {
    test('renders without crashing', () => {
        render(<Notifications />);
    });

    test('renders three list items', () => {
        render(<Notifications />);
        const listItems = screen.getAllByRole('listitem');
        expect(listItems).toHaveLength(3);
    });

    test('renders the text "Here is the list of notifications"', () => {
        render(<Notifications />);
        const notificationText = screen.getByText("Here is the list of notifications");
        expect(notificationText).toBeInTheDocument();
    });
});