import React from 'react';
import { render, screen } from '@testing-library/react';
import Imagen from '../components/atoms/Imagen';

describe('Imagen', () => {
    it('renderiza la imagen correctamente', () => {
        render(<Imagen src="img/foto.jpg" alt="foto de prueba" />);
        const img = screen.getByRole('img');
        expect(img).toBeTruthy();
    });

    it('tiene el atributo src correcto', () => {
        render(<Imagen src="img/foca.jpeg" alt="foca" />);
        const img = screen.getByRole('img');
        expect(img.getAttribute('src')).toBe('img/foca.jpeg');
    });

    it('tiene el atributo alt correcto', () => {
        render(<Imagen src="img/foca.jpeg" alt="Foca sonriente" />);
        const img = screen.getByAltText('Foca sonriente');
        expect(img).toBeTruthy();
    });
});
