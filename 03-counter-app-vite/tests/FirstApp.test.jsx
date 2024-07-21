import { FirstApp } from "../src/FirstApp"
import { render } from "@testing-library/react";

describe('Pruebas en FirstApp', () => {
    // test('Debe de hacer match con el snapshot', () => {
    //     const title = 'Hola, Soy Goku';
    //     const {container} = render(<FirstApp title={title} />)
    //     expect(container).toMatchSnapshot();
    // });

    test('Debe de mostrar el titulo en un h1', () => {
        const title = 'Hola, soy Goku';
        const { container, getByText, getByTestId } = render(<FirstApp title={title} />)
        expect(getByText(title)).toBeTruthy();
        // const h1 = container.querySelector('h1');
        // expect(h1.innerHTML).toContain(title)

        expect(getByTestId('test-title').innerHTML).toContain(title);
    });

    test('debe de mostrar el subtitulo enviado por props', () => {
        const title = 'Hola, soy Goku';
        const subTitle = 'Soy un subtitulo';
        const { getByText } = render(
            <FirstApp
                title={title}
                subTitle={subTitle}
            />)
        expect(getByText(subTitle)).toBeTruthy();
    })
})