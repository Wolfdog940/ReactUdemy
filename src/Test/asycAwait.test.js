import { getImagen } from "../base-pruebas/11-async-await"

describe('asynAwait', () => {
    test('Tiene que devolver una respuesta api',async () => {
      
        const url =await getImagen();
        console.log(url);
        console.log('test')

    })
    
})

