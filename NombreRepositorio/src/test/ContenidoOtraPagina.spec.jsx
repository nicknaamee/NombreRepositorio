import React from 'react';
import { render, screen } from '@testing-library/react';
import ContenidoOtraPagina from '../components/organisms/ContenidoOtraPagina';

describe('ContenidoOtraPagina', () => {
    it('renderiza el componente correctamente', () => {
        const { container } = render(<ContenidoOtraPagina />);
        expect(container.firstChild).toBeTruthy();
    });

    it('muestra el título de la página', () => {
        render(<ContenidoOtraPagina />);
        const titulo = screen.getByText('Mira esta otra pagina u.u');
        expect(titulo).toBeTruthy();
    });

    it('muestra la imagen de la foca con el alt correcto', () => {
        render(<ContenidoOtraPagina />);
        const imagen = screen.getByAltText('Foca sonriente');
        expect(imagen).toBeTruthy();
    });
});
