const route = require("express").Router();

route.get('/', (req, res) => {
    res.send('Hello World');
})

module.exports = route