const express = require('express')
const router = express.Router()

// Destructuring

const {cardDao: dao} = require('../../daos/dao')

// api/card

router.get('/', (req,res)=> {
    dao.findAll(res, dao.table)
})

//api/card/count

router.get('/count', (req, res)=> {
    dao.countAll(res, dao.table)
})

// router.get('/rating/:rating', (req,res)=> {
//     dao.findById(res, req.params.rating)
// })

// router.get('/card/:card/:id', (req,res)=> {
//     dao.findByCard(res, req.params.rating, req.params.id)
// })

// router.get('/cast/:id', (req, res)=> {
//     dao.findProducts(req, res, req.params.id)
// })


// api/card/:id
router.get('/:id', (req,res)=> {
    dao.findById(res, dao.table, req.params.id)
})

router.post('/create', (req, res)=> {
    dao.create(req, res)
})

//api/film/update/:id
router.patch('/update/:id', (req,res)=> {
    dao.update(req,res)
})

module.exports = router