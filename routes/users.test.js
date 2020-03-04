const request = require('supertest')
const app = require("../app")

test("Obtener listado de usuarios" , async ()=>{
    const resp = await  request(app)
    .get("/users")
    .expect(200)

    // console.log(resp);
    expect(resp.body).toBeTruthy();
    expect(Array.isArray(resp.body)).toBe(true)
})

describe("ver listado de usuario por mail" , () =>{

    test("Que si funciona regresando un email" , ()  =>{
        request(app)
        .get("/users/Oscar@hot.com")
        .expect(200)
    })

    test("Que no regrese el corre" , () =>{
        const resp = request(app)
        .get("/users/Oscar1@hotm.com")
        .expect(404)
        
        console.log(resp.body);
        // expect(resp.body.error).toBe("no existe")
    })
})
