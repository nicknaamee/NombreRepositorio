import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Entrada from '../components/atoms/Entrada';

describe('Entrada', () => {
    it('renderiza un input por defecto', () => {
        render(<Entrada placeholder="Escribe aquí" />);
        const input = screen.getByPlaceholderText('Escribe aquí');
        expect(input).toBeTruthy();
    });

    it('renderiza un textarea cuando multilinea es true', () => {
        const { container } = render(<Entrada multilinea={true} />);
        const textarea = container.querySelector('textarea');
        expect(textarea).toBeTruthy();
    });

    it('aplica la clase "input" al elemento input por defecto', () => {
        render(<Entrada placeholder="Campo" />);
        const input = screen.getByPlaceholderText('Campo');
        expect(input).toHaveClass('input');
    });
});
