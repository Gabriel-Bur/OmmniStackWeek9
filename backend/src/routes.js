const express = require('express');
const routes = express.Router();



routes.get('/api/users',(req, res) =>{
    return res.json({"Hello":"World"})
});


module.exports = routes;