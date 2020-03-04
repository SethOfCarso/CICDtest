const express = require('express')

const app = express()
const usersRouter = require("./routes/users.route")

app.use(express.json())
app.use(usersRouter)



module.exports = app;