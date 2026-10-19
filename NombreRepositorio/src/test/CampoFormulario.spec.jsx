import React from 'react';
import { render, screen } from '@testing-library/react';
import CampoFormulario from '../components/molecules/CampoFormulario';

describe('CampoFormulario', () => {
    it('renderiza la etiqueta con el texto correcto', () => {
        render(<CampoFormulario id="nombre" etiqueta="Nombre" />);
        const label = screen.getByText('Nombre');
        expect(label).toBeTruthy();
    });

    it('muestra el mensaje de error cuando se pasa la prop error', () => {
        render(
            <CampoFormulario
                id="correo"
                etiqueta="Correo"
                error="El correo es inválido"
                errorId="correo-error"
            />
        );
        const error = screen.getByText('El correo es inválido');
        expect(error).toBeTruthy();
    });

    it('la etiqueta tiene la clase "label"', () => {
        render(<CampoFormulario id="apellido" etiqueta="Apellido" />);
        const label = screen.getByText('Apellido');
        expect(label).toHaveClass('label');
    });
});
