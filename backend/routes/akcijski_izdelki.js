var express = require('express');
var router = express.Router();

const knexfile = require('../knexfile').development;
const knex = require('knex')(knexfile);
const bookshelf = require('bookshelf')(knex);
const akcijski_izdelki = bookshelf.Model.extend({ 
    tableName: "akcijskiIzdelki", 
    idAttribute: 'id' 
});

router.get('/', async (req, res, next) => {
    try {
        const najdeni_akcijski_izdelki = await new akcijski_izdelki().fetchAll();
        res.status(200).json(najdeni_akcijski_izdelki.toJSON()); 
        } 
    catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;