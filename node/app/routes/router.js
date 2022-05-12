const express = require('express')
const router = express.Router()
const PORT = process.env.PORT || 3000

router.get('/', (req, res)=> {
    res.json({
        'All Products': `http://localhost:${PORT}/api/card`
    })
})

//api/film

router.use('/card', require('./api/cardRoutes'))



module.exports = router