var express = require('express');
var router = express.Router();

const knexfile = require('../knexfile').development;
const knex = require('knex')(knexfile);
const bookshelf = require('bookshelf')(knex);
const podatkiKosarice = bookshelf.Model.extend({
    tableName: "podatkiKosarice",
    idAttribute: 'id'
});
router.post('/', (req, res, next) => {
    try {
        let vsebinaKosarice = {
            izbraniIzdelki: JSON.stringify(req.body['izbraniIzdelki[]']),
            skupnaCena: req.body.skupnaCena,
            datum: req.body.datumNakupa
        };
        const model = new podatkiKosarice(vsebinaKosarice);
        model.save()
            .then(savedModel => {
                res.json({success: true});
            })
            .catch(err => {
                console.log("napaka");
                res.json({success: false, error: err});
            });
    }
    catch (error) {
        res.status(500).json(error);
    }
});


module.exports = router;