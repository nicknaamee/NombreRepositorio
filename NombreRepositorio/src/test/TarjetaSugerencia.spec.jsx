import React from 'react';
import { render, screen } from '@testing-library/react';
import TarjetaSugerencia from '../components/molecules/TarjetaSugerencia';

describe('TarjetaSugerencia', () => {
    it('renderiza la tarjeta correctamente', () => {
        const { container } = render(<TarjetaSugerencia texto="Reducir plástico" />);
        expect(container.firstChild).toBeTruthy();
    });

    it('muestra el texto de la sugerencia', () => {
        render(<TarjetaSugerencia texto="Reciclar cartón" />);
        const texto = screen.getByText(/Reciclar cartón/);
        expect(texto).toBeTruthy();
    });

    it('tiene la clase "box" en el contenedor', () => {
        const { container } = render(<TarjetaSugerencia texto="Usar menos agua" />);
        expect(container.firstChild).toHaveClass('box');
    });
});
