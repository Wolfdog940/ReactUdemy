import { getHeroeByIdAsync } from "../base-pruebas/09-promesas";

describe('Pruebas de Promesas', () => {
    test('Debe retornar un Heroe', (done) => {
      const id = 1;

      getHeroeByIdAsync(id)
        .then(hero =>{
            expect(hero).toEqual({

                id: 1,
                name: 'Batman',
                owner: 'DC'

                });
            done()
        })

      
    });
    test('Debe tener un error si heroe no existe', (done) => {
        const id = 500;
  
        getHeroeByIdAsync(id)
        
            .then( hero =>{
                // eslint-disable-next-line jest/no-conditional-expect
                expect(hero).toBeFalsy();
            })
          .catch(error =>{

            // eslint-disable-next-line jest/no-conditional-expect
            expect(error).toBe(`No se pudo encontrar el héroe con Id:   ${id}`)
            
            done()
          })
  
        
      });
    
  
})
