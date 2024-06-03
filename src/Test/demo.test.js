describe('Pruebas DEMO',()=>{

    test('Esta prueba no debe falLWar',()=>{
        // 1.INICIALIZACION
        const message1 = 'Hola mundo';
        //2.ESTIMULO
        const mesaage2 = message1.trim();
        //3. OBSERVAR EL COMPORTAMIENTO ... ESPERADO
        expect(message1).toBe(mesaage2);
     });
     
});
