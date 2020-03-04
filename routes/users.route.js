const router = require('express').Router();
const path = require('path')
const users = require("../db/users.json")

router.get('/users', (req,res) =>{
    res.json(users);
})

router.get("/users/:email" , (req,res) =>{
    let user1 = users.find( u => u.email ==  req.params.email)
    // console.log(user1);
    if(user1){
        res.send(user1)
    }
    else{
        res.status(404)
        res.send({error: "no existe"})
    }
    // res.json(users.email)
})

// router.post("/users" , (req,res) => {

// })

module.exports = router;