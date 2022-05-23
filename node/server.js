const express = require('express')
const server = express()
const PORT = process.env.PORT || 3005

//import secerty

const helmet = require('helmet')
const cors = require('cors')

//const server = express().use(helmet()).use(cors()).use(express.json())

server.use(helmet())
server.use(cors())
server.use(express.json())
server.use(express.urlencoded({extended: true}))


const router = require('./app/routes/router')
server.use('/api', router)

server.listen(PORT, ()=> {
    console.log(`Not the port ${PORT}
    your looking for`)
})