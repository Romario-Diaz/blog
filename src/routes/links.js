const route = require('express').Router();

route.get('/', (req, res) => {
    res.render('web/home')
})

route.get('/about', (req, res) => {
    res.render('web/about')
})

route.get('/publishments', (req, res) => {
    res.render('web/publishments')
})

route.get('/courses', (req, res) => {
    res.render('web/courses')
})

module.exports = route