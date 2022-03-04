const express = require('express')
const cors = require('cors')

//Configuration de nos variables d'environnement.
require('dotenv').config({path:"./config/.env"})

//Concerne notre base de données.
require('./config/db')
const app = express()

//Sert à donner l'acces a tout autre user externe
app.use(cors())

app.use(express.json())

app.use('/api', require('./routes/user.routes') )

app.listen(
    process.env.PORT, 
    ()=>console.log(`connected on port ${process.env.PORT}`)
)