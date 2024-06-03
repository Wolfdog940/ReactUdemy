import { getUser, getUsuarioActivo } from "../base-pruebas/05-funciones";

describe('Pruebas de funciones', () => {
  test('GetUser deve de retornar un objeto', () => {
    const testUser = {
        uid:'ABC123',
        username:'El_Papi1502'
    };
    const user = getUser();
    expect(testUser).toEqual(user);
  });
  test('GetUsuario activo tiene que retornar un nombre', () => {
  const name = 'Oscar'
    const usuarioActivo = getUsuarioActivo(name);
    expect( usuarioActivo).toEqual({
        uid:'ABC567',
        username:name
    });
    
  })
  
  
})
