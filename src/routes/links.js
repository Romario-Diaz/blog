const route = require('express').Router();

route.get('/', (req, res) => {
    res.render('web/home')
})

module.exports = route