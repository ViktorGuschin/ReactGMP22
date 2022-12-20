import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { fireEvent, screen } from '@testing-library/react';
import Search from './search';
import { renderWithProviders } from '../../Utils/renderWithProviders';

const navigateMock = jest.fn();
const useNavigateMock = () => jest.fn();

describe('Search Component', () => {
    beforeEach(() => {
        jest.mock('react-router-dom', () => ({
            ...jest.requireActual('react-router-dom'),
            useNavigate: useNavigateMock,
        }));
    });

    afterEach(() => {
        jest.unmock('react-router-dom');
    });

    it('should match snapshot', () => {
        const { asFragment } = renderWithProviders(
            <MemoryRouter>
                <Search />
            </MemoryRouter>,
        );
        expect(asFragment()).toMatchSnapshot();
    });

    it('should call with valid searchQuery by click button', () => {
        const value = 'test';
        renderWithProviders(
            <MemoryRouter>
                <Search />
            </MemoryRouter>,
        );

        const input = screen.getByPlaceholderText('What do you want to watch?');
        const button = screen.getByText('search');

        fireEvent.change(input, { target: { value } });
        fireEvent.click(button);

        expect(navigateMock).toHaveBeenCalledWith({ pathname: `/search/${value}`, search: '' });
    });
});
