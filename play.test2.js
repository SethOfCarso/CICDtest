// Si funciona
test(' solo para ver si funciona jest' ,() =>{

})

// No funciona
test(' solo para ver si funciona jest' ,() =>{
    // throw new Error ("no paso");
    expect(4).toBe(4);
    expect({}).toEqual({})
    // ToEqual es para objeto
    expect({nombre:"hola"}).toEqual({nombre:"hola"})

})

function len(valor){
    return valor.lenght;
}



test('Funciona len', () => {
    let test = [1,2,"a"]
    
    // expect(len(test)).toBe(4);
    // expect( len(test) ).tobeDefined();
    // expect(len(test)).toBeGreaterThanOrEqual(0);
    
})

describe("Para ver si funciona la funcion len" , ()=>{
    test("test 1" ,() =>{
        expect(4).toBe(4)
    })
    test("test 2" ,() =>{
        expect(4).toBe(4)
    })
    
})

test("Codigo asincrono" , (done) =>{
    setTimeout(() => {
        let res = "hola"
        expect(res).toBe("hola");
        done();
    }, 2000)
})



// expected(valor).Comparador(argumento)


