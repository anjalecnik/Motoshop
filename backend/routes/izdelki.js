var express = require('express');
var router = express.Router();

const knexfile = require('../knexfile').development;
const knex = require('knex')(knexfile);
const bookshelf = require('bookshelf')(knex);
const izdelki = bookshelf.Model.extend({ 
    tableName: "izdelki", 
    idAttribute: 'id' 
});

router.get('/', async (req, res, next) => {
    try {
        const najdeniIzdelki = await new izdelki().fetchAll();
        res.status(200).json(najdeniIzdelki.toJSON()); 
        } 
    catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;