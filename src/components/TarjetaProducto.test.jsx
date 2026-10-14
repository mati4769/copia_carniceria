import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it ,expect } from "vitest";

import TarjetaProducto from "./TarjetaProducto";
import carneImagenTest from "../assets/img/carneImagenTest.jpg";

describe("TarjetaProducto", () => {
    it('Debe cambiar el texto del boton a "Guardado" al hacer clic', () => {
        // 1. preparacion de datos (ARRANGE)
        const productoMock = {
            imagen: carneImagenTest.jpg,
            titulo: "carne test",
            descripcion: "Carne generica test",
            precio: "10.000"
        };
        //2. ejecucion (ACT)
        render(<TarjetaProducto {...productoMock}/>);

        const boton = screen.getByRole('button'); //getByRole solo sirve si es unicamente UN boton
        fireEvent.click(boton);
        //3. verificacion (ASSERT)
        expect(boton.textContent).equals('Guardado en favoritos')
    });
});