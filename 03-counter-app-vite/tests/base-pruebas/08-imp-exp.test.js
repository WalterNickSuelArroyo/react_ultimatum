import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe('Pruebas en 08-imp-exp', () => {
    test('getHeroeById debe de retornar un heroe por ID', () => {
        const id = 1;
        const hero = getHeroeById(id);
        expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' })
    });

    test('getHeroeById debe de retornar undefined si no existe ID', () => {
        const id = 100;
        const hero = getHeroeById(id);
        expect(hero).toBeFalsy();
    });

    //Tarea
    //1. 
    //Debe de retornar un arreglo con los heros de DC
    //Length===3
    //toEqual al arreglo filtrado

    //2.
    //debe de retornar un arreglo con los heroes de Marvel
    //length===2

    test('getHeroesByOwner debe de retornar un arreglo con los heros de DC', () => {
        const own = 'DC'
        const hero = getHeroesByOwner(own)
        expect(hero.length).toEqual(3)
    });

    test('getHeroesByOwner debe de retornar un arreglo con los heros de Marvel', () => {
        const own = 'Marvel'
        const hero = getHeroesByOwner(own)
        expect(hero.length).toBe(2)
        expect(hero).toEqual(heroes.filter( (heroe) => heroe.owner === own ));
    })
})