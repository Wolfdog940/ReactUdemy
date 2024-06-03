import { getHeroeById, getHeroesByOwner } from "../base-pruebas/08-imp-exp";

describe('Imp-esp', () => {
  test('Necesitas un id y un OWNER', () => {

    const id = 2;
    const heroe = getHeroeById(id)
    console.log(heroe)
    expect(heroe).toEqual({ id: 2, name: 'Spiderman', owner: 'Marvel' })
});
  
    test('undefined si el id no existe', () => {

        const id = 200;
        const heroe = getHeroeById(id)
        console.log(heroe)
        expect(heroe).toBeUndefined();
    
    });
    test('heroes de marvel', () => {
        const owner = 'Marvel';

        const marvelHeroes = getHeroesByOwner(owner);
    console.log(marvelHeroes.length)

        expect(marvelHeroes).toHaveLength(2)
      
    });
    test('heroes de DC', () => {
        const owner = 'DC';

        const marvelHeroes = getHeroesByOwner(owner);
    console.log(marvelHeroes.length)

        expect(marvelHeroes).toHaveLength(3)
      
    })
    
})
