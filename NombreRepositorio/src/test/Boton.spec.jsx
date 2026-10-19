import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Boton from '../components/atoms/Boton';

describe('Boton', () => {
    it('renderiza el botón con el texto correcto', () => {
        const { getByText } = render(<Boton>Enviar</Boton>);
        expect(getByText('Enviar')).toBeTruthy();
    });

    it('aplica la clase "button" por defecto', () => {
        render(<Boton>Aceptar</Boton>);
        const boton = screen.getByText('Aceptar');
        expect(boton).toHaveClass('button');
    });

    it('ejecuta la función onClick al hacer click', () => {
        let contador = 0;
        render(<Boton onClick={() => { contador++; }}>Click</Boton>);
        const boton = screen.getByText('Click');
        fireEvent.click(boton);
        expect(contador).toBe(1);
    });
});
