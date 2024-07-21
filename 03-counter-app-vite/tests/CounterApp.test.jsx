import { CounterApp } from "../src/CounterApp"
import { fireEvent, render, screen } from '@testing-library/react'

describe('Haciendo pruebas en el archivo CounterApp', () => {
    const value = 10;

    test('debe de incrementar con el boton +1', () => { 
        render(<CounterApp value={value}/>) ;
        fireEvent.click(screen.getByText('+1'));
        expect(screen.getByText('11')).toBeTruthy();
    });

    test('debe de decrementar con el boton -1', () => { 
        render(<CounterApp value={value}/>) ;
        fireEvent.click(screen.getByText('-1'));
        expect(screen.getByText('9')).toBeTruthy();
    });

    test('debe de funcionar el boton de reset', () => { 
        render(<CounterApp value={value}/>) ;
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));

        // Primera forma
        // fireEvent.click(screen.getByText('Reset'));
        // expect(screen.getByText(value)).toBeTruthy();

        // Segunda forma
        fireEvent.click(screen.getByRole('button', {name: 'btn-reset'}));
        expect(screen.getByText(value)).toBeTruthy();
    })
})