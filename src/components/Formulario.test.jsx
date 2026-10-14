import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it ,expect } from "vitest";

import Formulario from "./Formulario";

describe('Formulario', () => {
    it('Debe permitir ingresar el texto "Juanito" en el campo Nombre', () => {
        render (<Formulario />);

        const inputNombre = screen.getByLabelText(/Nombre:/i);

        fireEvent.change(inputNombre, {target: {value: 'Juanito'}});

        expect(inputNombre.value).toBe("Juanito");
    });
});