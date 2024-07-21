import { getImagen } from "../../src/base-pruebas/11-async-await"

describe('Pruebas en 11-async-await', () => {
    // test('getImagen debe de retornar un URL de la imagen', async () => {
    //     const url = await getImagen();
    //     expect(typeof url).toBe('string')
    // })
    test('getImagen debe de retornar un error si no tenemos API key', async () => {
        const resp = await getImagen();
        expect(resp).toBe('No se encontro la imagen')
    })
})