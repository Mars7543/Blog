const router = require('express').Router()

router.get('/', (req, res) => {
    res.send('Route Working')
})

module.exports = router