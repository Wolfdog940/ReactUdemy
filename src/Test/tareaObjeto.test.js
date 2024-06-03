import { usContext } from "../base-pruebas/06-deses-obj";


describe('Pruebas sobre objeto', () => {
  test('tiene que retornar un objeto con clave y edad', () => {
    const clave = 'Nero';
    const edad = 11;

    const context = usContext({clave,edad});

    expect(context).toEqual({
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        }
    })
  })
  
})
